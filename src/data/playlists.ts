// Playlists data for Consciencioteca
// Update the "id" field with the real playlist ID from YouTube
// Example: https://www.youtube.com/playlist?list=PLaTPd9NtvVwUpH4wT5Io6X6129Vv2_6M5
// The ID is: PLaTPd9NtvVwUpH4wT5Io6X6129Vv2_6M5

export interface Playlist {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
}

export const playlists: Playlist[] = [
  {
    id: "PLaTPd9NtvVwUpH4wT5Io6X6129Vv2_6M5", // Substitua pelo ID real da playlist
    title: "Círculo Mentalsomático",
    description: "Tertuliarium",
    thumbnail: "/files/IMG_7609.JPG",
  },
  {
    id: "PLaTPd9NtvVwUGZdRjbByen_UZ062J_yuW", // Substitua pelo ID real da playlist
    title: "Entrevistas Zéfiro 1",
    description: "Tertuliarium",
    thumbnail: "/files/IMG_7612.JPG",
  },
  {
    id: "PLaTPd9NtvVwXZuCOs6LNa8JncDUe_N_n5", // Substitua pelo ID real da playlist
    title: "Entrevistas Zéfiro 2",
    description: "Entrevistas Zéfiro & EM; Waldo Vieira; Tertuliarium; 2012", 
    thumbnail: "/files/IMG_7621.JPG",
  },
  {
    id: "PLaTPd9NtvVwVzNxBqbCxpIMmCuvPazvbO", // Substitua pelo ID real da playlist
    title: "Recortes Selecionados de Tertúlias Waldo Vieira",
    description: "Tertuliarium",
    thumbnail: "/files/IMG_8327.JPG",
  },
  {
    id: "PLaTPd9NtvVwXSDNzkaj_6Ja_HinL2mPeQ", // Substitua pelo ID real da playlist
    title: "Recortes Selecionados Círculo Mentalsomático",
    description: "Tertuliarium",
    thumbnail: "/files/IMG_8061.JPG",
  },
  {
    id: "PLaTPd9NtvVwUxkFLTsM7UkgsSz8U5c7kP", // Substitua pelo ID real da playlist
    title: "Videos Antigos (VHS Holoteca)",
    description: "Tertuliarium",
    thumbnail: "/files/IMG_8371.JPG",
  },{
    id: "PLaTPd9NtvVwU5204hqRbpqPRQypebDlTf", // Substitua pelo ID real da playlist
    title: "Registros CCCI",
    description: "Tertuliarium",
    thumbnail: "/files/IMG_9629.JPG",
  },
  
  {
    id: "PLaTPd9NtvVwXs2D6-q2t4y_Wc5HRlpl23", // Substitua pelo ID real da playlist
    title: "E.M. - Grupo SJC - 21/05/1988",
    description: "Tertuliarium",
    thumbnail: "/files/IMG_9713.JPG",
  },
  {
    id: "PLaTPd9NtvVwUpZwJ4iAfL-re7vz4VfKnf", // Substitua pelo ID real da playlist
    title: "Al Ghazali'",
    description: "Abū Ḥāmid Muḥammad ibn Muḥammad al-Ṭūsiyy al-Ghazali ( أَبُو حَامِد مُحَمَّد بْن مُحَمَّد ٱلطُّوسِيّ ٱلْغَزَّالِيّ). c. 1058 – 19/12/1111 (450-505 AH Anno Hegirae, calendário islâmico). Persian Sunni Muslim polymath. One of the most prominent and influential jurisconsults, legal theoreticians, muftis, philosophers, theologians, logicians and mystics in Islamic history.",
    thumbnail: "/files/Al-Ghazali.jpg",
  },
];

