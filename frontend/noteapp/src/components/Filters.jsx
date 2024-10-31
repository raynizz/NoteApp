import { Select, Input } from 'antd';

const { Option } = Select;

const Filters = ({ filter, setFilter }) => {
  return (
    <div className="flex flex-row gap-5">
      <Input
        className="w-3/5"
        placeholder="Пошук"
        onChange={(e) => setFilter({...filter, search: e.target.value })}
      />
      <Select
        className="w-2/5"
        defaultValue={filter.sortOrder}
        onChange={(value) => setFilter({ ...filter, sortOrder: value })}
      >
        <Option value={"asc"}>З початку старі</Option>
        <Option value={"desc"}>З почтаку нові</Option>
      </Select>
    </div>
  );
};

export default Filters;