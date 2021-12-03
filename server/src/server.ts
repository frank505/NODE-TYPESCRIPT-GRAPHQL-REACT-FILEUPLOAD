import express from 'express';
import * as helmet from "helmet";
import * as cors from "cors";
import path from "path";
import * as graphqlHTTP from 'express-graphql';
import {schema} from './schema'
import {graphqlUploadExpress} from "graphql-upload";




export default class Server
{

    app: express.Application;

    constructor()
    {

        this.app = express();
        this.configuration();
    }


    public configuration()
    {
        this.app.set('port',process.env.PORT || 6500);
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:true}));
        this.app.use(cors());
        this.app.use(helmet({ contentSecurityPolicy: (process.env.NODE_ENV === 'production') ? undefined : false }));
        this.app.use('/img',express.static(path.join(__dirname, 'public/uploads/gallery')));
        this.app.use(
            "/graphql",
            graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }),
            graphqlHTTP.graphqlHTTP({
                schema,
                graphiql: true,
            })
        );


    }



    public start()
    {
        if(process.env.NODE_ENV !=='test')
        {
            this.app.listen(this.app.get('port'), ()=>
            {
                console.log('Server is listening '+this.app.get('port'));
            })
        }

    }


    public appInstance = () =>
    {
        return this.app;
    }


}


    const server = new Server();
    server.start();



