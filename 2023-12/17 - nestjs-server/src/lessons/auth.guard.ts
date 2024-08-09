import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from "@nestjs/common";
// import type { Request } from 'express'

@Injectable()
export class AuthGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean {
      const request = context.switchToHttp().getRequest()
      const token = request.headers.authorization
      if (!token) {
        throw new ForbiddenException()
      }
      return true;
    }
}