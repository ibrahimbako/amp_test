import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SimCardPoolResolverBase } from "./base/simCardPool.resolver.base";
import { SimCardPool } from "./base/SimCardPool";
import { SimCardPoolService } from "./simCardPool.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SimCardPool)
export class SimCardPoolResolver extends SimCardPoolResolverBase {
  constructor(
    protected readonly service: SimCardPoolService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
