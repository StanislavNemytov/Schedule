import { DownOutlined } from '@ant-design/icons';
/* eslint-disable no-console */
import { Button, Collapse, DatePicker, Form, Input, Row, Select } from 'antd';
import 'antd/dist/antd.css';
import moment, { Moment } from 'moment';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postEvent } from '../../redux/requests';
import { isNewTaskPostedSelector } from '../../redux/selectors';
import { AppStateType } from '../../redux/store';
import './style.less';

const { Item } = Form;
const timezones = ['Europe/London', 'Europe/Kaliningrad', 'Europe/Moscow', 'Europe/Volgograd'];

const taskType = ['js task', 'basic task', 'html/css task', 'git task'];

const CreateEventPage = (props: any) => {
  const [openedPanel, setOpenedPanel] = useState(false);
  const [dateFrom, setDateFrom] = useState(null as null | Moment);
  const [form] = Form.useForm();
  const { Panel } = Collapse;
  const { Option } = Select;

  const optionsTimeZone = timezones.map((oneTimeZone: string) => {
    return (
      <Option key={oneTimeZone} style={{ paddingLeft: 15 }} value={oneTimeZone}>
        {oneTimeZone}
      </Option>
    );
  });

  const optionsTaskType = taskType.map((type: string) => {
    return (
      <Option key={type} style={{ paddingLeft: 15 }} value={type}>
        {type}
      </Option>
    );
  });

  const onFinish = (values: { task: any }) => {
    const { task } = values;
    const [dateTime, deadline] = [task.date, task.deadline] as Moment[];
    const startDate = dateTime.tz(task.timeZone, true).format('x');
    const deadlineDate = deadline.tz(task.timeZone, true).format('x');


    if (startDate > deadlineDate) {

      console.log('task ended before start');
    } else {
      props.postEvent({
        ...task,
        dateTime: startDate,
        deadline: deadlineDate,
        feedback: true,
        InputFeedbackEvent: [],
      });
    }

    form.resetFields();
    setOpenedPanel((prevOpenedPanel) => !prevOpenedPanel);
  };

  function disabledDate(current: Moment) {
    return current && current < moment().endOf('day');
  }

  function disabledDateTo(current: Moment, rangeDateFrom: Moment | null) {
    if (!rangeDateFrom) return false;
    return current && current < rangeDateFrom;
  }

  const onCancel = () => {
    setOpenedPanel((prevOpenedPanel) => !prevOpenedPanel);
    form.resetFields();
  };
  const header = (
    <>
      Create Event <DownOutlined />
    </>
  );

  return (
    <Collapse activeKey={Number(openedPanel)} className="createEventPageContainer" accordion={true} onChange={onCancel}>
      <Panel header={header} key="1" style={{ textAlign: 'center' }} showArrow={false}>
        <Form
          className="createEventForm"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
          initialValues={{ size: 'default' }}
          onFinish={onFinish}
          form={form}
        >
          <Item name={['task', 'name']} label="Task name" rules={[{ required: true }]}>
            <Input />
          </Item>
          <Item name={['task', 'type']} label="Task type" rules={[{ required: true }]}>
            <Select>{optionsTaskType}</Select>
          </Item>
          <Item label="Start task" rules={[{ required: true }]} name={['task', 'date']}>
            <DatePicker
              showTime={{ defaultValue: moment('23:59:59', 'HH:mm:ss') }}
              disabledDate={disabledDate}
              onSelect={setDateFrom}
            />
          </Item>
          <Item label="Deadline" name={['task', 'deadline']}>
            <DatePicker
              disabled={!dateFrom}
              showTime={true}
              disabledDate={(current) => disabledDateTo(current, dateFrom)}
            />
          </Item>
          <Item label="TimeZone" rules={[{ required: true }]} name={['task', 'timeZone']}>
            <Select>{optionsTimeZone}</Select>
          </Item>
          <Item label="Place" name={['task', 'place']} rules={[{ required: true }]}>
            <Select>
              <Option value="online" style={{ paddingLeft: 15 }}>
                Online
              </Option>
              <Option value="offline" style={{ paddingLeft: 15 }}>
                Offline
              </Option>
            </Select>
          </Item>
          <Item name={['task', 'description']} label="Short description" rules={[{ required: true }]}>
            <Input.TextArea />
          </Item>
          <Item name={['task', 'descriptionUrl']} label="descriptionUrl" rules={[{ required: true }]}>
            <Input />
          </Item>
          <Item name={['task', 'comment']} label="Comment" rules={[{ required: true }]}>
            <Input.TextArea />
          </Item>
          <Row className="row">
            <div className="btn-container">
              <Item wrapperCol={{ span: 16, offset: 8 }}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Item>
              <Item wrapperCol={{ span: 16, offset: 8 }}>
                <Button>Preview</Button>
              </Item>
            </div>
            <div className="btn-container">
              <Item wrapperCol={{ span: 16, offset: 8 }}>
                <Button onClick={() => form.resetFields()} danger>
                  Clear
                </Button>
              </Item>
              <Item wrapperCol={{ span: 16, offset: 8 }}>
                <Button type="primary" onClick={onCancel} danger>
                  Cancel
                </Button>
              </Item>
            </div>
          </Row>
        </Form>
      </Panel>
    </Collapse>
  );
};

const mapStateToProps = (state: AppStateType) => {
  return {
    data: isNewTaskPostedSelector(state),
  };
};

export default connect(mapStateToProps, { postEvent })(CreateEventPage);
