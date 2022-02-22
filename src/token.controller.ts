import { Controller, Get, HttpCode, Post, Redirect } from "@nestjs/common";

@Controller('tokens')
export class TokenController {
    @Get()
    findAll(): string {
        return 'All Tokens Returned Successfully';
    }

    @Get('youtube')
    @Redirect('https://www.youtube.com')
    testYoutubeToken(): object {
        return { url: 'https://www.youtube.com'};
    }

    @Post()
    @HttpCode(204)
    create(): string {
        return 'Token created successfully';
    }
}