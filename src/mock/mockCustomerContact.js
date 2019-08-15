import mock from "./mock";

const contacts = [
  {
    id: 1,
    name: "Ntags",
    extended_name: "Open-source 3rd generation software",
    street: "6408 Muir Center",
    postal_code: null,
    city: "Rokoy",
    country_iso: "ID",
    ext_system_id: 240141,
    images: [
      {
        path: "http://dummyimage.com/173x203.png/dddddd/000000"
      }
    ]
  },
  {
    id: 2,
    name: "Tagopia",
    extended_name: "Sharable executive ability",
    street: "4248 Montana Terrace",
    postal_code: "43-445",
    city: "Dzięgielów",
    country_iso: "PL",
    ext_system_id: 191732,
    images: [
      {
        path: "http://dummyimage.com/234x167.jpg/ff4444/ffffff"
      },
      {
        path: "http://dummyimage.com/205x172.jpg/ff4444/ffffff"
      },
      {
        path: "http://dummyimage.com/138x176.bmp/5fa2dd/ffffff"
      }
    ]
  },
  {
    id: 3,
    name: "Quatz",
    extended_name: "Face to face cohesive benchmark",
    street: "34 Norway Maple Trail",
    postal_code: "1114",
    city: "Manoc-Manoc",
    country_iso: "PH",
    ext_system_id: 131884,
    images: [
      {
        path: "http://dummyimage.com/173x133.jpg/cc0000/ffffff"
      }
    ]
  },
  {
    id: 4,
    name: "Skiba",
    extended_name: "Implemented user-facing workforce",
    street: "311 Veith Crossing",
    postal_code: null,
    city: "Cikadu",
    country_iso: "ID",
    ext_system_id: 158614,
    images: [
      {
        path: "http://dummyimage.com/222x104.png/5fa2dd/ffffff"
      }
    ]
  },
  {
    id: 5,
    name: "Mudo",
    extended_name: "Implemented transitional knowledge user",
    street: "420 Karstens Avenue",
    postal_code: null,
    city: "Río Grande",
    country_iso: "PE",
    ext_system_id: 270418,
    images: [
      {
        path: "http://dummyimage.com/190x214.bmp/5fa2dd/ffffff"
      },
      {
        path: "http://dummyimage.com/209x108.jpg/cc0000/ffffff"
      },
      {
        path: "http://dummyimage.com/184x102.png/dddddd/000000"
      }
    ]
  }
];

mock.onGet(/\/api\/c\/\d+\/customer\/\d+\/contact/).reply(200, contacts);
