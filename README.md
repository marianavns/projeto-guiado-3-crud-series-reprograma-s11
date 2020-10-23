<img src=https://i.imgur.com/YFEGa7p.png alt="Ilustração frontal de duas mulheres sentadas num sofá preto comendo pipoca e assistindo algo na televisão, que não aparece na imagem." width="350" height="270"> 

# Rest API Guided Project - Series
> Proposed and guided exercise in {Reprograma} Backend Course (week 11) </br> - by instructor Vanessa Jansen (https://github.com/jansenvanessa).

We made an api together to control the movies we want to watch during class. How about we do one to control our series? In this api we want to be able to register series, each one with countless seasons and each season with a list of episodes.

## Tasks

| Verb         | Resource               | Description                           | Work progress
| ------------ | ---------------------- | ------------------------------------- | --------------
| GET          | `/series`              | Return all series                     | ✅ 
| GET          | `/series/:id`          | Return only a specific series         | ✅ 
| POST         | `/series`              | Register new series                   | ✅ 
| PUT          | `/series/:id`          | Update a specific series              | ✅ 
| DELETE       | `/series/:id`          | Delete a specific series              | ✅ 
| PATCH        | `/series/:id/liked`    | Update whether you like the series or not   | ✅ 

## Extra Tasks

Our series API contains multiple seasons and these contain multiple episodes. We can create some more routes to work with these seasons and episodes:

| Verbo        | Recurso                | Descrição                             | Work Progress
| ------------ | ---------------------- | ------------------------------------- | ----------------
| POST         | `/series/:id/season/:seasonId/episode` | Register a new episode for the season with :id is the series id and :seasonId is the season id | 🏗️
| POST         | `/series/:id/season`                   | Register new season in the series with :id is the series id | 🏗️
| DELETE       | `/series/:id/season/:seasonId`         | Delete a specific season with :id is the series id and :seasonId is the season id | 🏗️
| DELETE       | `/series/:id/season/:seasonId/episode/:episodeId` | Delete a specific episode in the season with :id is the series id, :seasonId is the season id and :episodeId is the episode id | 🏗️ 
| PATCH        | `/series/:id/season/:seasonId/episode/:episodeId/watched` | Update whether the episode was watched or not with :id is the series id, :seasonId is the season id and :episodeId is the episode id | 🏗️



✅ - done

🏗️ - building

🐞 - fixing bugs

🧾 - testing
