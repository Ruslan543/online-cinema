import { applyDecorators, UseGuards } from "@nestjs/common";
import { TypeRole } from "../auth.interface";
import { JwtAuthGuard } from "../guards/jwt.guard";
import { OnlyAdminGuard } from "../guards/admin.guard";

export const Auth = (role: TypeRole = "user") => {
  const decorator =
    role === "admin"
      ? UseGuards(JwtAuthGuard, OnlyAdminGuard)
      : UseGuards(JwtAuthGuard);

  return applyDecorators(decorator);
};
