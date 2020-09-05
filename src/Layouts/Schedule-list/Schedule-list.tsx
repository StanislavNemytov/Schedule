/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Layout } from 'antd';
import { ScheduleData } from 'src/types/types';
import { ScheduleContent } from '../ScheduleContent/ScheduleContent';
import ScheduleListMenu from '../ScheduleListMenu/ScheduleListMenu';

const { Content, Sider } = Layout;

const data: ScheduleData[] = [{
  "Blocks": "0 неделя",
  "Task": "студенты самостоятельно проходят онлайн курсы",
  "Time": "52h",
  "Include": [
    {
      "Blocks": "Computer Science Basics",
      "Task": "Пройти этот курс рекомендует EPAM. Из описания: Данный тренинг может быть хорошим стартом для дальнейшего изучения программирования и инженерной работы в IT сфере.",
      "Time": "16h",
      "Result": "На странице курса все темы отмечены галочками.\nСтудент может пояснить решение алгоритмов раздела Data Types and Algoritms задание Test - operators",
      "Notate": "Курс проходится за полчаса кликами по кнопке Next и перебором вариантов ответа в тестах."
    },
    {
      "Blocks": "HTML/Css online resource",
      "Task": "Базовый курс по html / css",
      "Time": "16h",
      "Result": "На странице курса все темы отмечены галочками. Студент может пояснить решение некоторых заданий (на выбор ментора)",
      "Notate": "Решения всех заданий доступны после 20-минутной паузы. Для проверки самостоятельности решения заданий нужно посмотреть и послушать как студент решает пройденные им таски"
    },
    {
      "Blocks": "JS online resource",
      "Task": "Базовый курс JavaScript. Если проходить осмысленно, даст неплохое представление о языке и его возможностях.",
      "Notate": "Решения всех заданий доступны после 20-минутной паузы. Для проверки самостоятельности решения заданий нужно посмотреть и послушать как студент решает пройденные им таски"
    }
  ]
},
{
  "Blocks": "1 неделя",
  "Task": "базовый html/css",
  "Time": "20h + 20h",
  "Include": [
    {
      "Blocks": "Git & GitHub",
      "Include": [
        {
          "Task": "Регистрация на Гитхабе",
          "Time": "0.5h",
          "Result": "Установлен Git\nСоздан github-аккаунт "
        },
        {
          "Task": "Полезные команды для работы с Git",
          "Time": "0.5h",
          "Result": "Создан репозиторий на гитхабе, создана ветка, добавлены файлы "
        },
        {
          "Task": "Требования к именам коммитов",
          "Time": "0.5h",
          "Result": "Студент даёт имена коммитам согласно гайдлайну"
        },
        {
          "Task": "Как разместить приложение на GitHub Pages",
          "Time": "0.5h",
          "Result": "Студент использует GitHub Pages и Netlify для деплоя своих проектов"
        }]
    },
    {
      "Blocks": "IDE",
      "Include": [
        {
          "Task": "VS Code – установка и настройка",
          "Time": "1h",
          "Result": "Установлен Visual Studio Code и рекомендованные плагины, студент может написать код в редакторе, "
        },
        {
          "Task": "Как написать и запустить HTML на компьютере?",
          "Time": "0.5h",
          "Result": "Студент может открыть html код в браузере используя плагин LiveServer"
        }
      ]
    },
    {
      "Blocks": "Markdown",
      "Task": "Что такое Markdown",
      "Time": "0.5h",
      "Result": "Студент знаком с синтаксисом Markdown и может его применить"
    },
    {
      "Blocks": "Практика.",
      "Task": "Task Markdown & Git",
      "Time": "4h",
      "Result": "Создан и размещён на gh-pages файл cv md с cv студента"
    },
    {
      "Blocks": "HTML/Css Basic. Semantic.",
      "Include": [
        {
          "Task": "HTML для самых маленьких",
          "Time": "2.5h",
          "Result": "Плейлист от Glo Academy с разбором особенностей HTML"
        },
        {
          "Task": "HTML для начинающих",
          "Time": "2.5h",
          "Result": "Плейлист от loftblog с отличным понятным доступным объяснением"
        },
        {
          "Task": "Справочник EMMET сокращений для ускорения верстки",
          "Time": "0.5h",
          "Result": "Студент знает и использует в вёрстке некоторые сокращения emmet "
        },
        {
          "Task": "Плагин Emmet - обзор"
        },
        {
          "Task": "Семантические теги в HTML",
          "Time": "0.5h",
          "Result": "Студент знает и использует в вёрстке семантические теги"
        }]
    },
    {
      "Task": "HTML5 Семантические элементы",
      "Time": "0.5h"
    },
    {
      "Blocks": "Практика.",
      "Task": "Task HTML, CSS & Git Basics",
      "Time": "2h",
      "Result": "Вёрстка cv студента на основе markdown файла из таска Markdown & Git. Создан файл index.html. Студент использует в вёрстке семантические теги"
    },
    {
      "Blocks": "CSS3.",
      "Include": [
        {
          "Task": "Видео лекция HTML/Css Basic",
          "Time": "2.5h"
        },
        {
          "Task": "CSS для самых маленьких",
          "Time": "1h"
        },
        {
          "Task": "30 CSS-селекторов, которые вы должны знать",
          "Time": "0.5h"
        },]
    },
    {
      "Blocks": "Практика",
      "Include": [
        {
          "Task": "Изучение селекторов посредством игры",
          "Time": "1h"
        },
        {
          "Task": "Task HTML, CSS & Git Basics",
          "Time": "2h",
          "Result": "Стилизация cv студента на основе созданного index.html файла    Пример оформления (optional)"
        },
        {
          "Task": "Build a Tribute Page",
          "Time": "4h",
          "Result": " Очень базовый и простой макет."
        },]
    },
    {
      "Blocks": "CSS positioning and layout (Flex)",
      "Include": [
        {
          "Task": "Видео лекция Position. Floats. Flex. Semantic. CSS3",
          "Time": "2h"
        },
        {
          "Task": "CSS: Flexbox",
          "Time": "0.5h",
          "Result": "Студент знает особенности вёрстки на флексбоксах"
        },
        {
          "Task": "Шпаргалка по Flexbox",
          "Time": "0.5h"
        },]
    },
    {
      "Blocks": "Практика",
      "Include": [
        {
          "Task": "Task HTML, CSS & Git Basics",
          "Time": "2h",
          "Result": "Завершение стилизации cv студента на основе созданного index.html файла."
        },
        {
          "Task": "Изучение флексбоксов посредством игры",
          "Time": "1h",
          "Result": "Студент использует флексбоксы для решения поставленных задач"
        },
        {
          "Task": "CSS3-медиазапросы",
          "Time": "0.5h",
          "Result": "Студент имеет представление про медиазапросы"
        },
        {
          "Task": "Уроки CSS - Медиа запросы основы",
          "Time": "0.5h",
          "Result": "Студент знает как использовать медиазапросы"
        },]
    },
    {
      "Blocks": "Практика",
      "Task": "Task HTML, CSS & Git Basics.",
      "Time": "3h",
      "Result": "Адаптивный дизайн cv с использованием медиазапросов"
    }
  ]
}]

export const ScheduleList = () => {
  const [content, setContent]: [null | ScheduleData, Function] = useState(null);

  const blocks = data.map(group => {
    const { Blocks, Task, Include, Time } = group;
    return { Blocks, Task, Include, Time };
  });


  return (
    <Layout style={{ padding: '0 24px', backgroundColor: "transparent" }}>
      <Sider style={{ border: "1px solid #f0f0f0" }}>
        <ScheduleListMenu blocks={blocks} handleClick={setContent} />
      </Sider>
      <Layout>
        <Content className="schedule_list-content" style={{ whiteSpace: 'pre-wrap', }}>
          <ScheduleContent content={content} />
        </Content>
      </Layout>
    </Layout>
  );
}