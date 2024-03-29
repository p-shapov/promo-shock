import type { QueryFunction } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { apiClient } from "@promo-shock/configs/api";
import type { Stream } from "@promo-shock/shared/entities";

const ticketToStreamCard = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  stream: any,
): Stream => ({
  saleAddress: stream.sale_address,
  ticketAddress: stream.ticket_address,
  paymentTokenAddress: stream.payment_token_address,
  name: stream.name,
  description: stream.description,
  banner: stream.banner,
  price: stream.price,
  startDate: Number(stream.start_date) * 1000,
  endDate:
    Number(stream.end_date) ||
    (Number(stream.start_date) + 60 * 60 * 24) * 1000,
  streamLink: stream.stream_link,
  streamerLink: stream.streamer_link,
  saleStartDate: Number(stream.sale_start_date) * 1000,
  saleEndDate: Number(stream.sale_end_date) * 1000,
  totalAmount: stream.total_amount,
  reservedAmount: stream.reserved_amount,
  purchased: stream.purchased,
});

type Filters = {
  buyer?: string;
  owner?: string;
  limit?: number;
};

const fetchStreamCard: QueryFunction<Stream | null, [string, string]> = async ({
  queryKey: [, address],
  signal,
}) => {
  // FIXME :: codegen parameters
  try {
    const res = await apiClient.get_stream_ticket__ticket_addr__get({
      params: {
        ticket_addr: address,
      },
      signal,
    });

    return ticketToStreamCard(res);
  } catch (error) {
    if (error instanceof AxiosError && error.response?.status === 404) {
      return null;
    }

    throw error;
  }
};

const fetchStreamCards: QueryFunction<Stream[], [string, Filters]> = async ({
  queryKey: [, filters],
  signal,
}) => {
  const offset = 0;
  const limit = filters?.limit;
  const owner = filters?.owner?.toLowerCase();
  const buyer = filters?.buyer?.toLowerCase();
  const res = await apiClient.all_tickets_ticket_get({
    queries: {
      owner,
      buyer,
      offset,
      limit,
    },
    signal,
  });

  return res.map(ticketToStreamCard);
};

const fetchInfiniteStreamCards: QueryFunction<
  { items: Stream[]; cursor: number | null },
  [string, Filters],
  number
> = async ({ queryKey: [, filters], pageParam, signal }) => {
  const limit = filters?.limit;
  const offset = limit && limit * pageParam;
  const owner = filters?.owner?.toLowerCase();
  const buyer = filters?.buyer?.toLowerCase();
  const res = await apiClient.all_tickets_ticket_get({
    queries: {
      owner,
      buyer,
      offset,
      limit,
    },
    signal,
  });

  return {
    items: res.map(ticketToStreamCard),
    cursor: res.length ? pageParam + 1 : null,
  };
};

export { fetchStreamCard, fetchStreamCards, fetchInfiniteStreamCards };
