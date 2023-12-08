import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SimCardPoolModuleBase } from "./base/simCardPool.module.base";
import { SimCardPoolService } from "./simCardPool.service";
import { SimCardPoolController } from "./simCardPool.controller";
import { SimCardPoolResolver } from "./simCardPool.resolver";

@Module({
  imports: [SimCardPoolModuleBase, forwardRef(() => AuthModule)],
  controllers: [SimCardPoolController],
  providers: [SimCardPoolService, SimCardPoolResolver],
  exports: [SimCardPoolService],
})
export class SimCardPoolModule {}
