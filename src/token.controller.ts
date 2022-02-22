import { Controller, Get, HttpCode, Post } from "@nestjs/common";

@Controller('cats')
export class TokenController {
    @Get()
    findAll(): string {
        return 'All Tokens Returned Successfully';
    }

    @Post()
    @HttpCode(204)
    create(): string {
        return 'Token created successfully';
    }
}