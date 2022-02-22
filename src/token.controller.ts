import { Controller, Get, HttpCode, Param, Post, Redirect } from "@nestjs/common";

@Controller('tokens')
export class TokenController {
    @Get()
    findAll(): string {
        return 'All Tokens Returned Successfully';
    }

    @Get('youtube')
    @Redirect('https://www.youtube.com', 200)
    testYoutubeToken(): object {
        return { url: 'https://www.youtube.com'};
    }

    @Post()
    @HttpCode(204)
    create(): string {
        return 'Token created successfully';
    }

    @Get(':id')
    findOne(@Param() params): string {
        return `You have entered text: ${params.id}`;
    }

    @Get(':id')
    findOneParam(@Param('id') id:string): string {
        return `You have entered text: ${id}`;
    }
}