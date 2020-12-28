function sum(...arguments) {
    console.log(arguments.reduce((acc,el) => acc + el));
}

function myBind(...bindArgs) {
    const fcn = this;
    
    return function(ctx, ...callArgs){
        return fcn.apply(ctx, bindArgs.concat(...callArgs));
    }
}
