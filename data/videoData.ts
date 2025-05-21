// /pages/videos/videoData.ts

export const videoData: Record<
  string,
  {
    src: string;
    description: string;
    date?: string;
    info?: string;
    actress?: string; // ✅ Added actress field
  }
> = {
  "Rockstar(2011)": {
    src: "https://streamtape.com/e/28G23JD7lYczXq",
    description: "A musical journey of a troubled artist finding meaning through music.",
    date: "2011-11-11",
    info: "Starring Ranbir Kapoor. Directed by Imtiaz Ali.",
    actress: "Cindy Craves", // ✅ Added
  },
  "Vikings": {
    src: "https://www.youtube.com/embed/9GgxinPwAGc",
    description: "A legendary Norse saga brought to the screen.",
    date: "2013-03-03",
    info: "Starring Travis Fimmel as Ragnar Lothbrok.",
    actress: "Magdelene St Michaels", // ✅ Example added
  },
  "Video C": {
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "A classic viral internet music video.",
    date: "1987-07-27",
    info: "Rick Astley's famous hit 'Never Gonna Give You Up'.",
    actress: "Raylene", // ✅ Example added
  },
  "Video D": {
    src: "https://streamtape.com/e/RL3MkKbp4jHd1q2/",
    description: "Ed Sheeran's romantic hit single.",
    date: "2017-01-06",
    info: "From the album 'Divide'.",
    actress: "Tanya Tate", // ✅ Example added
  },
  // Add more videos here...
};
