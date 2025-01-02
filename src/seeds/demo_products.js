exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("products")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("products").insert([
        {
          title: "US",
          description: `Adelaide Wilson and her family are attacked by mysterious figures dressed in red. Upon closer inspection, the Wilsons realise that the intruders are exact lookalikes of them.`,
          price: 12.0,
          image_url:
            "https://m.media-amazon.com/images/M/MV5BMzhkMjFkN2YtODU2Ni00YWYwLWExN2MtOWNjZmQxM2U4YTM5XkEyXkFqcGc@._V1_.jpg",
        },
        {
          title: "Death Whisperer",
          description:
            "After the elder brother returns to his hometown, he must find a way to save his younger sister from a bizarre illness that is causing her to behave differently.",
          price: 15.0,
          image_url:
            "https://m.media-amazon.com/images/M/MV5BNmYwZDNkNDYtMDNlOS00OWY1LWI1ZjQtM2Y0NTM0ODkyMTVlXkEyXkFqcGc@._V1_.jpg",
        },
        {
          title: "MAI",
          description: `A Vietnamese woman has endured many difficulties in her life. When she meets her neighbour, they develop feelings for each other.`,
          price: 20.0,
          image_url:
            "https://m.media-amazon.com/images/M/MV5BNTgwNDBhOGItNTIxZC00ZjMzLWFhZTYtOGNiM2MzYWViMWUwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        },
        {
          title: "How to Make Millions Before Grandma Dies",
          description: `A man quits work to care for his dying grandmother, motivated by her fortune. He schemes to win her favour before she passes.`,
          price: 25.0,
          image_url:
            "https://images.ctfassets.net/4cd45et68cgf/44BiRzPgPcZPGC4v3XsCQ1/c700f2c9e2de8a02f01bea8b41dfbd79/HTMMBGD-en.jpg?w=2000",
        },
        {
          title: "Smile",
          description: `After witnessing a bizarre, traumatic incident involving a patient, Dr. Rose Cotter starts experiencing frightening occurrences that she can't explain. As an overwhelming terror begins taking over her life, Rose must confront her troubling past in order to survive and escape her horrifying new reality.`,
          price: 30.0,
          image_url:
            "https://m.media-amazon.com/images/M/MV5BZjEwYjQxZjAtZjUwZi00ZjQzLTk0YjYtMjE0ZjE3MjQ3MzUwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        },
        {
          title: "Don't Move",
          description: `When a killer injects her with a paralytic agent, a woman must run, fight and hide before her body completely shuts down.`,
          price: 35.0,
          image_url:
            "https://m.media-amazon.com/images/M/MV5BZmFlMTMyMzQtNmI4NC00YTcyLTgwOGUtMzc4YjcyNDUyOGY3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        },
        {
          title: "Deadpool & Wolverine",
          description: `Deadpool's peaceful existence comes crashing down when the Time Variance Authority recruits him to help safeguard the multiverse. He soon unites with his would-be pal, Wolverine, to complete the mission and save his world from an existential threat.`,
          price: 40.0,
          image_url:
            "https://m.media-amazon.com/images/M/MV5BZTk5ODY0MmQtMzA3Ni00NGY1LThiYzItZThiNjFiNDM4MTM3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        },
        {
          title: "Venom: The Last Dance",
          description: `Eddie Brock and Venom must make a devastating decision as they're pursued by a mysterious military man and alien monsters from Venom's home world.`,
          price: 40.0,
          image_url:
            "https://resizing.flixster.com/7pW-Wl_tjIUnlcPkLYudVsZS-00=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2RkYTQyZjkxLWZjYzItNGM5Yy1hN2FiLTA0YWQwMTAzNjVmZC5qcGc=",
        },
      ]);
    });
};
