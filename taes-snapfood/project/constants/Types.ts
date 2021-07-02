import { ImageInfo } from "expo-image-picker/build/ImagePicker.types"

/** INTERFACES */
export interface IUser {
    Email: string,
    Name: string,
    About: string,
    ProfileImage: ImageInfo | string,
    ProfileImageUrl: string,
    RecipesCreated: IRecipe[], // List of recipes
    RecipesLiked: IRecipe[],    
    Folders: IFolder[], // List of folders
    Follows: string [],
    Followers: string[]
}

export interface IFolder {
    Title: string,
    Recipes: IRecipe[]
}

export interface IRecipe {
    AuthorEmail: string,
    Name: string,
    Image: ImageInfo | string,
    ImageURL: string,
    Duration: number,
    Ingredients: IIngredient[],
    Process: string,
    Tags: string[],
    DateOfCreation: Date,
    Stars: number    
}

export interface IIngredient {
    quantity: string,
    quantityType: QuantityTypes,
    ingredient: IngredientTypes
}

/** ENUMS */
export enum QuantityTypes {
    grams = 'gramos',
    litros = 'litros',
    mililitros = 'mililitros',
    unity = 'unidad'
}

export enum IngredientTypes {
    bread = 'pan',
    rice = 'arroz',
    yeast = 'levadura',
    pasta = 'pasta',
    flour = 'harina',
    water = 'agua',
    oil = 'aceite',
    vinagre = 'vinagre',
    cebolla = 'cebolla(s)',
    huevo = 'huevo(s)',
    patatas = 'patata',
    sal = 'sal',
    pollo = 'pollo',
    soja = 'soja',
    pimiento = 'pimiento',
    nata = 'nata',
    queso = 'queso',
    jamoncocido = 'jamón cocido',
    guisantes = 'guisantes',
    zanahorias = 'zanahoria(s)',
    curry = 'curry',
    couscous = 'couscous',
    azucar = 'azúcar',
    garbanzos = 'garbanzos',
    tomates = 'tomate(s)',
    mantequilla = 'mantequilla',
    leche = 'leche',
    bacalao = 'bacalao'

}

/** LISTS */
export const ListOfQuantityTypes = [
    QuantityTypes.grams,
    QuantityTypes.litros,
    QuantityTypes.unity,
    QuantityTypes.mililitros
]

export const ListOfIngredientTypes = [
    IngredientTypes.bread,
    IngredientTypes.flour,
    IngredientTypes.pasta,
    IngredientTypes.rice,
    IngredientTypes.yeast,
    IngredientTypes.water,
    IngredientTypes.oil,
    IngredientTypes.vinagre,
    IngredientTypes.cebolla,
    IngredientTypes.huevo,
    IngredientTypes.patatas,
    IngredientTypes.sal,
    IngredientTypes.pollo,
    IngredientTypes.soja,
    IngredientTypes.pimiento,
    IngredientTypes.nata,
    IngredientTypes.queso,
    IngredientTypes.jamoncocido,
    IngredientTypes.guisantes,
    IngredientTypes.zanahorias,
    IngredientTypes.curry,
    IngredientTypes.couscous,
    IngredientTypes.azucar,
    IngredientTypes.garbanzos,
    IngredientTypes.tomates,
    IngredientTypes.mantequilla,
    IngredientTypes.leche,
    IngredientTypes.bacalao


]