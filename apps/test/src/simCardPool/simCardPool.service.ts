import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SimCardPoolServiceBase } from "./base/simCardPool.service.base";

@Injectable()
export class SimCardPoolService extends SimCardPoolServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
