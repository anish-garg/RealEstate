/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Modal, Button } from '@mantine/core'
import { DatePicker } from '@mantine/dates'
import { useContext, useState } from 'react'
import UserDetailsContext from '../../context/UserDetailsContext';
import { useMutation } from 'react-query';
import { bookVisit } from '../utilities/api';
import { toast } from 'react-toastify';
import dayjs from 'dayjs';
import Value from './Value';

const BookingModel = ({ opened, setOpened, propertyID, email }) => {
    const [value, setValue] = useState(null);
    const { userDetails, setUserDetails } = useContext(UserDetailsContext);

    const handleBookingSuccess = () => {
        toast.success("You have booked your visit", { position: "bottom-right" });
        setUserDetails((prev) => ({
            ...prev, bookings: [
                ...prev.bookings, {
                    id: propertyID, date: dayjs(Value).format("DD/MM/YYYY")
                }
            ]
        }))
    }

    const { mutate } = useMutation({
        mutationFn: () => bookVisit(value, propertyID, email),
        onSuccess: () => handleBookingSuccess(),
        onError: ({ response }) => toast.error(response.date.message),
        onSettled: () => setOpened(false)
    })
    return (
        <Modal
            opened={opened}
            onClose={() => setOpened(false)}
            title="Select the date when you want to visit"
            centered>
            <div className='flex flex-col justify-center items-center'>
                <DatePicker value={value} onChange={setValue} minDate={new Date()} />
                <Button disabled={!value} onClick={() => mutate()} >
                    Book Visit
                </Button>
            </div>
        </Modal>
    )
}

export default BookingModel