import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SimCardPoolService } from "./simCardPool.service";
import { SimCardPoolControllerBase } from "./base/simCardPool.controller.base";

@swagger.ApiTags("simCardPools")
@common.Controller("simCardPools")
export class SimCardPoolController extends SimCardPoolControllerBase {
  constructor(
    protected readonly service: SimCardPoolService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
