const path=require('path')
module.exports=(env)=>{
    console.log("env: "+env);
    const isProduction=env==='production'
    return {
        entry:'./src/app.js',//entry point
        output:{
            path:path.join(__dirname,'public'),//Location of op file
            filename:'bundle.js'
        },
        mode: 'development',
        module:{
            rules:[{
                use: {
                    loader: "babel-loader",
                    query: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                    }
                },
                //This tells webpack to use babel-loader
                test:/\.js$/, //regular exp of file edning with js
                exclude:/node_modules/
            },{
                test:/\.s?css$/,
                use:['style-loader','css-loader','sass-loader']
            }]
        },
        devtool:isProduction?'source-map' :'cheap-module-eval-source-map',
        devServer:{
            contentBase:path.join(__dirname,'public'),
            historyApiFallback:true
        }
    
    }

    
}
