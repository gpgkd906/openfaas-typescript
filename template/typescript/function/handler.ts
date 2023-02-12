import { RequestEvent, Context } from './handler.type';

export default async (event: RequestEvent, context: Context) => {
    try {
        context.headers({
            'Content-type': 'application/json',
            // 'Access-Control-Allow-Origin': '*',
            // 'Access-Control-Allow-Headers': 'Content-Type'
        });
    
        return context.status(200)
            .succeed({
                success: true
            })    
    } finally {
    }
}