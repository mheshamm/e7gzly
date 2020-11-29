export class place {
    constructor(
        public id: string, public tittle: string, public desc: string, public imageUrl: string, public price: number , public acc:string [] ,
         public noBeds : number ,public from : Date , public to : Date 
    ) {

    }
}