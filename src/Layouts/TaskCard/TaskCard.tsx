import React, { CSSProperties, useState } from 'react';
import './TaskCard.less';
import { EventsType, ICourseOverview } from "src/types/types"
import { Card, Tag, Modal } from 'antd';
import ModalWindow from '../ModalWindow/ModalWindow';

const DUMMY_DATA = {
  description: `
  Курс состоит из нескольких крупных модулей, 
  каждый из которых содержит короткие видео и тесты. 
  Задача тестов - проверить, насколько хорошо стала понятна тема. 
  Тесты можно проходить неограниченное количество раз, более того,
  во многих из них есть пояснения к неправильным ответам.
  Этот курс максимально гибкий: нет дедлайнов, 
  нет возможности "завалить" тест, 
  можно проходить обучение в удобное время в удобном месте.`,
  goal: "Цель курса - ознакомиться с основными технологиями и инструментами, используемыми в инженерной работе.",
  agenda: ['Железо компьютера',
    'Двоичная система счисления',
    'Операционные системы',
    'Типы данных и алгоритмы',
    'Компьютерные сети',
    'Инструменты повышения производительности'],
  teachers: [{
    firstName: 'Ricardo',
    secondName: 'Milos',
    company: 'Hot guys GMBH',
    photo: 'https://24smi.org/public/media/celebrity/2020/03/17/ndyuq11dpxep-rikardo-milos.jpg'
  }],
}

export default function TaskCard({ event }: { event: EventsType }) {
  const { comment, dateTime, description, descriptionUrl, id, name, place, timeZone, type } = event;

  const [modalVisibility, setModalVisibility] = useState(false);
  const [modalContent, setModalContent] = useState<ICourseOverview | null>(DUMMY_DATA);

  console.log(modalContent);

  const toggleModalVisibility = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const currentElement = e.target as HTMLElement;
    if (currentElement.closest('a')) return;
    setModalVisibility(true);
  }

  const onModalOkHandler = () => {
    setModalVisibility(false);
  }

  const onModalCancelHandler = () => {
    setModalVisibility(false);
  }

  const cardTitle = (field: string, title: string, style: CSSProperties) => {
    return (field &&
      <span style={style} ><b>{title}:</b> {field}</span>
    )
  }

  const renderTags = (type: string, id: string) => {
    const color = type === 'deadline' ? 'red' : 'green';
    return <Tag color={color} key={id}>
      {type}
    </Tag>
  }

  const time = cardTitle(timeZone, 'Time', { fontWeight: "normal" });
  const typeTSX = renderTags(type, id);

  const title = (
    <div style={{ display: "flex", justifyContent: "space-between", }}>
      <span>{name} {typeTSX}</span>
      {time}
    </div>
  );

  const cardRow = (title: string, field: string, link?: string) => {
    const content = link ? <a href={link} target="_blank" rel="noopener noreferrer" >{field}</a> : field
    return (
      <p style={{ display: "flex" }}> <b style={{ marginRight: "4px" }}>{title}:</b> {content}</p>
    )
  }

  const descriptionTSX = description && cardRow('Description', description, descriptionUrl)
  const commentTSX = comment && cardRow('Notate', comment)
  const placeTSX = place && cardRow('Place', place)
  const dateTimeTSX = dateTime && cardRow('Time start', dateTime)

  return (
    <>
      <Card onClick={toggleModalVisibility} className="schedule-list__card" key={id} title={title} style={{ marginBottom: '16px' }} >
        {descriptionTSX}
        {commentTSX}
        {placeTSX}
        {dateTimeTSX}
      </Card>
      {modalContent ?
        <ModalWindow data={modalContent}  okClickHandler={onModalOkHandler} cancelClickHandler={onModalCancelHandler} visible={modalVisibility}/> : null
      }
    </>
  )
}