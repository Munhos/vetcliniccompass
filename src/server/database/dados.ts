

const clients:any[] = [
    {
        "id":1,
            "name":"Julio Cesar",
            "phone":"44999999999",
            "email":"julio@gmail.com",
            "date_of_birth":"1993-12-12 10:10",
            "zipCode":"61760000",
            "pets":[
                {
                    "id":1,
                    "name":"Snoopy",
                    "species":"dog",
                    "carry":"p",
                    "weight": 5,
                    "date_of_birth":"1993-12-12 10:10"
                }
            ]
    }
]

export let idsClientesUtilizados:number[] = [1];
export let idsPetsUtilizados:number[] = [1];

export default clients