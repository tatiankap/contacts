import { Button, Flex, Form, Input, InputNumber, Modal } from 'antd';
import { useState } from 'react';

export default function AddContactModal({ addContact }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form] = Form.useForm();
    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        form.resetFields();
    };

    const onFinish = (values) => {
        addContact({ ...values, id: Date.now() });
        setIsModalOpen(false);
        form.resetFields();
    }
    return (
        <>
            <Button type="primary" onClick={showModal}>
                Add new Contact
            </Button>
            <Modal
                title="Add new Contact to List"
                open={isModalOpen}
                footer={[]}
                onCancel={handleCancel}
            >
                <Form form={form} layout="vertical" onFinish={onFinish}>
                    <Form.Item
                        name="name"
                        label="First Name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input first name!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="surname"
                        label="Last Name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input last name!',
                            }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Phone Number"
                        name="phone"
                        rules={[
                            {
                                required: true,
                                message: 'Please input phone number!',
                            },
                        ]}><InputNumber style={{ width: '100%' }} /></Form.Item>
                    <Form.Item>
                        <Flex gap={'small'}>
                            <Button key="back" onClick={handleCancel}>
                                Cancel
                            </Button>
                            <Button htmlType="submit">Save</Button>
                        </Flex>
                    </Form.Item>
                </Form>

            </Modal>
        </>
    )
}
