import "./App.css";
import "./media.css";
import PlayerList from "./modules/player-list";
import StreamList from "./modules/stream-list";
import News from "./modules/news";
import Header from "./modules/header";
import Footer from "./modules/footer";
import { Component } from "react";
import Sidebar from "./modules/sidebar";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "News",
      allNewsPosts: [
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
    this.changePage = this.changePage.bind(this);
  }
  changePage(target) {
    this.setState({ content: target });
  }
  render() {
    let content = <></>;
    if (this.state.content === "News") {
      content = (
        <>
          <News posts={this.state.allNewsPosts} />
          <Sidebar />
        </>
      );
    } else if (this.state.content === "PlayerList") {
      content = <PlayerList />;
    } else if (this.state.content === "StreamList") {
      content = <StreamList />;
    }
    return (
      <>
        <Header
          activePage={this.state.content}
          changePage={this.changePage}
          links={[
            { page: "News", text: "Новости" },
            { page: "PlayerList", text: "Состав команды" },
            { page: "StreamList", text: "Трансляции" },
          ]}
        />
        {/* <News posts={this.state.allNewsPosts} />
        <Sidebar />
        <PlayerList /> */}
        {content}
        <Footer />
        {/* <StreamList /> */}
      </>
    );
  }
}
