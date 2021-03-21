import "./App.css";
import PlayerList from "./modules/player-list";
import StreamList from "./modules/stream-list";
import News from "./modules/news";
import Header from "./modules/header";
import Footer from "./modules/footer";
import { Component } from "react";
import Sidebar from "./modules/sidebar";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allNewsPosts: [
        {
          paragraph:
            "Переписал сайт на React. Теперь можно переходить на страницы по прямой ссылке (раньше нельзя было, да, только на главную).",
          author: "Condor",
          date: "19.03.2021",
          id: 5,
        },
        {
          paragraph:
            'Принято решение заменить фотогалерею на раздел со стримами. Если кто-либо из стримеров нашей команды будет стримить - вы найдете его стрим на вкладке "Трансляции". Наслаждайтесь!',
          author: "Condor",
          date: "22.02.2021",
          id: 4,
        },
        {
          paragraph:
            "С фотогалереей пока не срослось, но теперь состав команды формируется из актуального ростера на Альфа-лиге.",
          author: "Condor",
          date: "09.09.2020",
          id: 3,
        },
        {
          paragraph:
            "Следующим этапом будет открытие фотогалереи и оптимизация кода. Ждем ваши отзывы и пожелания!",
          author: "Condor",
          date: "07.04.2019",
          id: 2,
        },
        {
          paragraph:
            "Добро пожаловать на обновленный сайт команды Panic! Он почти адаптивный и в дальнейшем его ждет множество изменений, следите за новостями!",
          author: "Condor",
          date: "07.04.2019",
          id: 1,
        },
      ],
    };
  }

  render() {
    return (
      <Router>
        <div className="app">
          <Header
            links={[
              { text: "Новости", route: "/" },
              { text: "Состав команды", route: "/players" },
              { text: "Трансляции", route: "/streams" },
            ]}
          />
          <Route
            path="/"
            exact
            component={() => {
              return (
                <>
                  <News posts={this.state.allNewsPosts} />
                  <Sidebar />
                </>
              );
            }}
          />
          <Route exact path="/players" component={PlayerList} />
          <Route exact path="/streams" component={StreamList} />
          <Footer />
        </div>
      </Router>
    );
  }
}
