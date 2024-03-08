import { Table, Button } from 'antd';

export default function TableContactsList({contacts, handleDelete}) {
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Surname',
            dataIndex: 'surname',
            key: 'surname',
        },
        {
            title: 'Phone number',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            render: (el) => <Button shape='round' onClick={() => handleDelete(el.id)}>Delete</Button>,
        },
    ];
    return (
        <Table rowKey={(el) => el.id} columns={columns} dataSource={contacts} />
    )
}
