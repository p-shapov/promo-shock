import dayjs from "dayjs";
import { isAddress } from "viem";
import type { RawCreateParams } from "zod";
import { z } from "zod";

const zDayjs = (params?: RawCreateParams) =>
  // @ts-expect-error Parameter 'dayjs' is constructor function.
  z.instanceof(dayjs, params);
const zUploadFile = (params?: RawCreateParams) =>
  z.object(
    {
      originFileObj:
        typeof window === "undefined"
          ? z.custom(() => true)
          : z.instanceof(File),
    },
    params,
  );
const zAddress = (params?: RawCreateParams, path?: Array<string>) =>
  z.string(params).refine(isAddress, { path, message: "Invalid address" });

export { zDayjs, zUploadFile, zAddress };
