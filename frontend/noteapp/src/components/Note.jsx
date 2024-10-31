import { Button, Card, Divider, Input } from 'antd';
import moment from 'moment/moment';

export default function Note({title, description, date}) {
  return (
    <Card hoverable="true" title={title} extra={<Button type="text">Видалити</Button>}>
        <Card.Meta description={description}/>
        <Divider />
        <h1/>{moment(date).format("DD/MM/YYYY hh:mm:ss")}<h1/>
    </Card>
  );
}