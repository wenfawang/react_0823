const path = require('path');

module.exports = {
    entry: "./app/main.js",                     
    output: {                                   
        path: path.resolve(__dirname, "dist"),  
        filename: "bundle.js",                  
        publicPath : "/public"
    },
    module: {                                  
        rules: [
            {
                test: /\.js$/,                    
                loader: "babel-loader",           
                include: [
                    path.resolve(__dirname, "app")
                ],
                options: {
                    presets: ["es2015","react"],
                    plugins : ["transform-object-rest-spread"]
                }
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: "style-loader" 
                    }, 
                    {
                        loader: "css-loader" 
                    }, 
                    {
                        loader: "less-loader" 
                    }
                ]
            }
        ]
    }
}