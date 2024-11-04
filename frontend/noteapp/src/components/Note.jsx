import { Button, Card, Divider, Input } from 'antd';
import moment from 'moment';

export default function Note({id, title, description, date, onDelete}) {
  return (
    <Card hoverable="true" title={title} extra={<Button type="text" onClick={() => onDelete(id)}>Видалити</Button>}>
        <Card.Meta description={description}/>
        <Divider />
        <h1/>{moment(date).format("DD/MM/YYYY hh:mm:ss")}<h1/>
    </Card>
  );
}