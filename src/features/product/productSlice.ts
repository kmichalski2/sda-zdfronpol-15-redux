import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface ProductModel {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

export interface ProductState {
  products: ProductModel[];
}

const initialState: ProductState = {
  products: [
    {
      id: "1",
      name: "Call of Duty: Black Ops Cold War",
      price: 79,
      description:
        "Kultowa seria Black Ops powraca z Call of Duty®: Black Ops Cold War, czyli bezpośrednią kontynuacją uwielbianego przez fanów oryginalnego Call of Duty®",
      image:
        "https://f00.esfr.pl/foto/3/69764077369/3afe5edb7577c097857395bd5803e310/activision-call-of-duty-black-ops-cold-war-ps4,69764077369_8.jpg",
    },
    {
      id: "2",
      name: "Fifa 23",
      price: 179,
      description:
        "Niech piłkarskie emocje rozgorzeją na nowo z kolejną odsłoną tytułu FIFA 23.",
      image:
        "https://f01.esfr.pl/foto/1/108661762201/1615f5bc64632d78fcf97b2028320b98/electronic-arts-fifa-23-gra-na-ps4-kompatybilna-z-ps5,108661762201_8.jpg",
    },
    {
      id: "3",
      name: "God of War",
      price: 79,
      description:
        "Ta zdumiewająca nowa wersja gry God of War rozmontowuje kluczowe elementy charakterystyczne serii – sprawiającą satysfakcję walkę, rozmach świata gry i przejmującą opowieść – a następnie spaja je z powrotem",
      image:
        "https://f00.esfr.pl/foto/1/50877521801/6f562f1c6c03d33c1458bd7a7ad1cdb7/sony-god-of-war-playstation-hits-ps4,50877521801_8.jpg",
    },
    {
      id: "4",
      name: "Ghost of Tsushima",
      price: 189,
      description:
        "Pod koniec XIII wieku imperium mongolskie unicestwiało całe narody w ramach swojej kampanii podboju Wschodu. ",
      image:
        "https://f01.esfr.pl/foto/4/55862747841/957fc29d6381e9c76f04279080e77523/sony-ghost-of-tsushima-ps4,55862747841_8.jpg",
    },
  ],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
});

export const selectProducts = (rootState: RootState) =>
  rootState.product.products;

export const productReducer = productSlice.reducer;
