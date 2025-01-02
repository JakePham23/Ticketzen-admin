/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    await knex("genres").insert([
        { name: "Action" },
        { name: "Adventure" },
        { name: "Comedy" },
        { name: "Drama" },
        { name: "Fantasy" },
        { name: "Horror" },
        { name: "Mystery" },
        { name: "Thriller" },
        { name: "Romance" },
    ]);

    await knex("languages").insert([
        { name: "English" },
        { name: "Vietnamese" },
        { name: "Chinese" },
    ]);

    await knex("age_ratings").insert([
        { name: "P" }, // Suitable for all ages
        { name: "K" }, // Suitable for children under 13 years old, but only if accompanied by a parent or guardian
        { name: "T13" }, // Suitable for viewers 13 years old and older
        { name: "T16" }, // Suitable for viewers 16 years old and older
        { name: "T18" }, // Suitable for viewers 18 years old and older
        { name: "C" }, // Not suitable for distribution
    ]);

    await knex("cinemas").insert([
        {
            name: "Cinestar Quốc Thanh",
            address: "271 Nguyễn Trãi, P. Nguyễn Cư Trinh, Q.1, Tp. Hồ Chí Minh",
        },
        {
            name: "CGV Hùng Vương Plaza",
            address: "Tầng 7, Hùng Vương Plaza, 126 Hùng Vương, Q.5, Tp. Hồ Chí Minh",
        },
        {
            name: "Lotte Nam Sài Gòn",
            address:
                "Tầng 3, Lotte Mart, 469 Nguyễn Hữu Thọ, P. Tân Hưng, Q.7, Tp. Hồ Chí Minh",
        },
    ]);

    await knex("screens").insert([
        { cinema_id: 1, name: "Screen 1", seats: 100 },
        { cinema_id: 1, name: "Screen 2", seats: 80 },
        { cinema_id: 2, name: "Screen 1", seats: 120 },
        { cinema_id: 2, name: "Screen 2", seats: 90 },
        { cinema_id: 3, name: "Screen 1", seats: 110 },
        { cinema_id: 3, name: "Screen 2", seats: 70 },
    ]);

    await knex("seat_types").insert([
        { name: "Platinum" },
        { name: "Gold" },
        { name: "Silver" },
    ]);

    await knex("seats").insert([
        { screen_id: 1, seat_number: 1, seat_type: 1 },
        { screen_id: 1, seat_number: 2, seat_type: 1 },
        { screen_id: 1, seat_number: 3, seat_type: 1 },
        { screen_id: 1, seat_number: 4, seat_type: 1 },
        { screen_id: 1, seat_number: 5, seat_type: 1 },
        { screen_id: 1, seat_number: 6, seat_type: 1 },
        { screen_id: 1, seat_number: 7, seat_type: 1 },
        { screen_id: 1, seat_number: 8, seat_type: 1 },
        { screen_id: 1, seat_number: 9, seat_type: 1 },
        { screen_id: 1, seat_number: 10, seat_type: 1 },
        { screen_id: 1, seat_number: 11, seat_type: 1 },
        { screen_id: 1, seat_number: 12, seat_type: 1 },
        { screen_id: 1, seat_number: 13, seat_type: 1 },
        { screen_id: 1, seat_number: 14, seat_type: 1 },
        { screen_id: 1, seat_number: 15, seat_type: 1 },
        { screen_id: 1, seat_number: 16, seat_type: 1 },
        { screen_id: 1, seat_number: 17, seat_type: 1 },
        { screen_id: 1, seat_number: 18, seat_type: 1 },
        { screen_id: 1, seat_number: 19, seat_type: 1 },
        { screen_id: 1, seat_number: 20, seat_type: 1 },
        { screen_id: 1, seat_number: 21, seat_type: 1 },
        { screen_id: 1, seat_number: 22, seat_type: 1 },
        { screen_id: 1, seat_number: 23, seat_type: 1 },
        { screen_id: 1, seat_number: 24, seat_type: 1 },
        { screen_id: 1, seat_number: 25, seat_type: 1 },
        { screen_id: 1, seat_number: 26, seat_type: 1 },
        { screen_id: 1, seat_number: 27, seat_type: 1 },
        { screen_id: 1, seat_number: 28, seat_type: 1 },
        { screen_id: 1, seat_number: 29, seat_type: 1 },
        { screen_id: 2, seat_number: 1, seat_type: 1 },
        { screen_id: 2, seat_number: 2, seat_type: 1 },
        { screen_id: 2, seat_number: 3, seat_type: 1 },
        { screen_id: 2, seat_number: 4, seat_type: 1 },
        { screen_id: 2, seat_number: 5, seat_type: 1 },
        { screen_id: 2, seat_number: 6, seat_type: 1 },
        { screen_id: 2, seat_number: 7, seat_type: 1 },
        { screen_id: 2, seat_number: 8, seat_type: 1 },
        { screen_id: 2, seat_number: 9, seat_type: 1 },
        { screen_id: 2, seat_number: 10, seat_type: 1 },
        { screen_id: 2, seat_number: 11, seat_type: 1 },
        { screen_id: 2, seat_number: 12, seat_type: 1 },
        { screen_id: 2, seat_number: 13, seat_type: 1 },
        { screen_id: 2, seat_number: 14, seat_type: 1 },
        { screen_id: 2, seat_number: 15, seat_type: 1 },
        { screen_id: 2, seat_number: 16, seat_type: 1 },
        { screen_id: 2, seat_number: 17, seat_type: 1 },
        { screen_id: 2, seat_number: 18, seat_type: 1 },
        { screen_id: 2, seat_number: 19, seat_type: 1 },
        { screen_id: 2, seat_number: 20, seat_type: 1 },
        { screen_id: 2, seat_number: 21, seat_type: 1 },
        { screen_id: 2, seat_number: 22, seat_type: 1 },
        { screen_id: 2, seat_number: 23, seat_type: 1 },
        { screen_id: 2, seat_number: 24, seat_type: 1 },
        { screen_id: 2, seat_number: 25, seat_type: 1 },
        { screen_id: 2, seat_number: 26, seat_type: 1 },
        { screen_id: 2, seat_number: 27, seat_type: 1 },
        { screen_id: 2, seat_number: 28, seat_type: 1 },
        { screen_id: 2, seat_number: 29, seat_type: 1 },
        { screen_id: 3, seat_number: 1, seat_type: 1 },
        { screen_id: 3, seat_number: 2, seat_type: 1 },
        { screen_id: 3, seat_number: 3, seat_type: 1 },
        { screen_id: 3, seat_number: 4, seat_type: 1 },
        { screen_id: 3, seat_number: 5, seat_type: 1 },
        { screen_id: 3, seat_number: 6, seat_type: 1 },
        { screen_id: 3, seat_number: 7, seat_type: 1 },
        { screen_id: 3, seat_number: 8, seat_type: 1 },
        { screen_id: 3, seat_number: 9, seat_type: 1 },
        { screen_id: 3, seat_number: 10, seat_type: 1 },
        { screen_id: 3, seat_number: 11, seat_type: 1 },
        { screen_id: 3, seat_number: 12, seat_type: 1 },
        { screen_id: 3, seat_number: 13, seat_type: 1 },
        { screen_id: 3, seat_number: 14, seat_type: 1 },
        { screen_id: 3, seat_number: 15, seat_type: 1 },
        { screen_id: 3, seat_number: 16, seat_type: 1 },
        { screen_id: 3, seat_number: 17, seat_type: 1 },
        { screen_id: 3, seat_number: 18, seat_type: 1 },
        { screen_id: 3, seat_number: 19, seat_type: 1 },
        { screen_id: 3, seat_number: 20, seat_type: 1 },
        { screen_id: 3, seat_number: 21, seat_type: 1 },
        { screen_id: 3, seat_number: 22, seat_type: 1 },
    ]);

    await knex("promotions").insert([
        {
            title: "Buy 1 Get 1 Free",
            description: "Buy 1 ticket and get 1 free",
            image:
                "https://img.freepik.com/free-psd/movie-time-horizontal-banner-template_23-2148575762.jpg?t=st=1731758561~exp=1731762161~hmac=b3b6674ecd7ae524c31867e91f195dbeefdf6f5677ef4caef93c56171fe2c8b7&w=1380",
        },
        {
            title: "1 + 1 Free Ticket - Bring your friends",
            description: "Buy 1 ticket and get 1 free",
            image:
                "https://img.freepik.com/free-vector/cinema-festival-horizontal-sale-banner-template_23-2149941972.jpg?t=st=1731758608~exp=1731762208~hmac=3320f21da8007e667282c91ddc21912e0fec2b1e18be03734b7246a2d7b3e8e6&w=1380",
        },
        {
            title: "Drive-in Cinema",
            description: "Enjoy the movie from the comfort of your car",
            image:
                "https://img.freepik.com/free-psd/retro-drive-cinema-facebook-template_23-2150212488.jpg?t=st=1731758708~exp=1731762308~hmac=296e697460aa75a58b51102421746c9f010dc8299c15d31cf4076283099e651c&w=1380",
        },
    ]);

    await knex("products").insert([
        {
            title: "Ngày xưa có một chuyện tình",
            description:
                "Ngày Xưa Có Một Chuyện Tình xoay quanh câu chuyện tình bạn, tình yêu giữa hai chàng trai và một cô gái từ thuở ấu thơ cho đến khi trưởng thành, phải đối mặt với những thử thách của số phận. Trải dài trong 4 giai đoạn từ năm 1987 - 2000, ba người bạn cùng tuổi - Vinh, Miền, Phúc đã cùng yêu, cùng bỡ ngỡ bước vào đời, va vấp và vượt qua.",
            genre: 9,
            price: 75,
            language: 2,
            age_rating: 4,
            duration: 135,
            image_url:
                "https://images2.thanhnien.vn/528068263637045248/2024/4/17/image001-17133320243131705570977.jpg",
            trailer: "https://www.youtube.com/watch?v=Not4hIJxwpw",
            poster:
                "https://baobariavungtau.com.vn/dataimages/202411/original/images1979585_B__phim__Ng_y_x_a_c__m_t_chuy_n_t_nh__h_a_h_n_s__c__b_i_c_nh_mi_n_qu__th__m_ng__ho_i_c__v__chuy_n_t_nh_thanh_xu_n_trong_s_ng__r_ng_r_..jpg",
            release_date: "2024-10-28",
            rating: 8.8,
        },
        {
            title: "LOVE IN THE BIG CITY: ĐÔI BẠN HỌC YÊU",
            description:
                "Bị hiểu lầm là hơn cả bạn bè, hai người bạn cùng phòng Jae-hee và Heung-soo cùng nhau khám phá những phức tạp của chuyện tình hiện đại ở thành phố lớn Seoul.",
            genre: 9,
            language: 2,
            price: 75,
            age_rating: 5,
            duration: 118,
            image_url:
                "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/3/image/1800x/71252117777b696995f01934522c402d/l/i/litbc-main-poster-printing.jpg",
            trailer: "https://www.youtube.com/watch?v=39WgZD26O3E",
            poster:
                "https://m.media-amazon.com/images/M/MV5BZGJmNjJkMzItZmVlMi00NjhiLTllNjctNGMzNjhlZTI0NGFhXkEyXkFqcGc@._V1_.jpg",
            release_date: "2024-11-08",
            rating: 9.5,
        },
    ]);

    await knex("products")
        .update({
            genre: 6,
            language: 1,
            age_rating: 5,
            release_date: "2019-03-22",
            poster: "https://s21519.pcdn.co/wp-content/uploads/2019/04/Us.png",
            rating: 6.8,
            trailer: "https://www.youtube.com/watch?v=hNCmb-4oXJA",
            duration: 116,
        })
        .where("id", 1);
    await knex("products")
        .update({
            genre: 6,
            language: 1,
            age_rating: 5,
            release_date: "2019-03-22",
            poster:
                "https://www.heavenofhorror.com/wp-content/uploads/2024/04/Death-Whisperer-2023-Netflix-Review.jpg",
            rating: 5.8,
            trailer: "https://www.youtube.com/watch?v=Iu-Yb5aPH8k",
            duration: 121,
        })
        .where("id", 2);
    await knex("products")
        .update({
            genre: 4,
            language: 2,
            age_rating: 5,
            release_date: "2024-02-10",
            poster:
                "https://m.baotuyenquang.com.vn/media/images/2024/02/img_20240211235754.jpg",
            rating: 6.8,
            trailer: "https://www.youtube.com/watch?v=Y4_fJ6smkBg",
            duration: 131,
        })
        .where("id", 3);
    await knex("products")
        .update({
            genre: 4,
            language: 2,
            age_rating: 3,
            release_date: "2024-04-04",
            poster: "https://i.ytimg.com/vi/HrVX_nHNIUA/maxresdefault.jpg",
            rating: 8.1,
            trailer: "https://www.youtube.com/watch?v=0lpXPWKpSY4",
            duration: 125,
        })
        .where("id", 4);
    await knex("products")
        .update({
            genre: 6,
            language: 1,
            age_rating: 5,
            release_date: "2022-09-30",
            poster:
                "https://static01.nyt.com/images/2022/10/05/arts/04smile-movie1/merlin_214038735_39a787d1-0ffb-48a5-a15f-3af53046fdff-superJumbo.jpg",
            rating: 6.5,
            trailer: "https://www.youtube.com/watch?v=BcDK7lkzzsU",
            duration: 115,
        })
        .where("id", 5);
    await knex("products")
        .update({
            genre: 5,
            language: 1,
            age_rating: 5,
            release_date: "2024-10-25",
            poster:
                "https://www.hollywoodreporter.com/wp-content/uploads/2024/09/VL_04128_R.jpg?w=1296",
            rating: 5.8,
            trailer: "https://www.youtube.com/watch?v=YjTZMEbpKsc",
            duration: 120,
        })
        .where("id", 6);
    await knex("products")
        .update({
            genre: 6,
            language: 1,
            age_rating: 3,
            release_date: "2024-04-04",
            poster:
                "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/1800x/71252117777b696995f01934522c402d/1/2/1280x720.jpg",
            rating: 7.7,
            trailer: "https://www.youtube.com/watch?v=73_1biulkYk",
            duration: 127,
        })
        .where("id", 7);
    await knex("products")
        .update({
            genre: 6,
            language: 1,
            age_rating: 5,
            release_date: "2024-10-25",
            poster:
                "https://turkblogs.com/wp-content/uploads/2024/09/Venom-The-Last-Dance-2024.webp",
            rating: 6.2,
            trailer: "https://www.youtube.com/watch?v=__2bjWbetsA",
            duration: 108,
        })
        .where("id", 8);

    await knex("showtimes").insert([
        {
            movie_id: 1,
            screen_id: 1,
            start_time: "2024-11-28 19:00:00",
            end_time: "2024-11-28 21:15:00",
        },
        {
            movie_id: 1,
            screen_id: 1,
            start_time: "2024-11-28 21:30:00",
            end_time: "2024-11-28 23:45:00",
        },
        {
            movie_id: 1,
            screen_id: 2,
            start_time: "2024-11-28 19:00:00",
            end_time: "2024-11-28 21:15:00",
        },
        {
            movie_id: 1,
            screen_id: 2,
            start_time: "2024-11-28 21:30:00",
            end_time: "2024-11-28 23:45:00",
        },
        {
            movie_id: 2,
            screen_id: 3,
            start_time: "2024-11-28 19:00:00",
            end_time: "2024-11-28 21:00:00",
        },
        {
            movie_id: 2,
            screen_id: 3,
            start_time: "2024-11-28 21:15:00",
            end_time: "2024-11-28 23:15:00",
        },
        {
            movie_id: 2,
            screen_id: 4,
            start_time: "2024-11-28 19:00:00",
            end_time: "2024-11-28 21:00:00",
        },
        {
            movie_id: 2,
            screen_id: 4,
            start_time: "2024-11-28 21:15:00",
            end_time: "2024-11-28 23:15:00",
        },
    ]);
};