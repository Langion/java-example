import { Apira } from "@langion/apira";
import { Response } from "node-fetch";

export const path = __filename;
export const api = new Apira<void, Response>();
