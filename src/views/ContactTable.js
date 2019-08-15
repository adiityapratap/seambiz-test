import React, { useEffect, useState } from "react";
import { Button, Snackbar, CircularProgress, Avatar, Container, Table, TableCell, TableHead, TableRow, TableBody, FormControl, InputLabel, Input } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { useAsync } from "react-async";
import { loadContacts } from "../api/contact";
import ModalDialog from '../components/ModalDialog';

import LoadingIndicator from "../components/LoadingIndicator";

function ContactTable({ history, searchTerm }) {
	const dispatch = useDispatch();
	const contact = useSelector(({ contact }) => contact);
    
	const { data=[], error, isLoading } = useAsync(loadContacts, { companyId: 1, customerId: 1 });
    
	const [filteredData, setFilteredData] = useState([]);
	const searchColumns = ["name", "extended_name", "ext_system_id", "street", "city"];

    const [notificationOpen, setNotificationOpen] = React.useState(false);

    function handleClose(event, reason) {
        if (reason === 'clickaway') {
        return;
        }

        setNotificationOpen(false);
    }

	if (isLoading) return <LoadingIndicator />;
    if (error) return "Error:" + error;
    
    let createContactModal = React.createRef();

    function openCreateContactModal() {
        createContactModal.current.handleClickOpen();
    }

    function createContact() {
        setNotificationOpen(true);
        createContactModal.current.handleClose();
    }

	return (
        <div>
            <Container>
                <Table className="mb-sm">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Extended Name</TableCell>
                            <TableCell>Street</TableCell>
                            <TableCell>Postal Code</TableCell>
                            <TableCell>City</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            data.map((contact, index) => {
                                return (
                                    <TableRow key={contact.id}>
                                        <TableCell>{contact.name || ''}</TableCell>
                                        <TableCell>{contact.extended_name || ''}</TableCell>
                                        <TableCell>{contact.street || ''}</TableCell>
                                        <TableCell>{contact.postal_code || ''}</TableCell>
                                        <TableCell>{contact.city || ''}</TableCell>
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </Table>
                <Button color="primary" className="pull-right" onClick={openCreateContactModal}>
                    Create Contact
                </Button>
            </Container>
            <ModalDialog 
                ref={createContactModal}
                title={'Create Contact'}
                onConfirm={createContact}
            >
                <FormControl fullWidth className="mb-sm">
                    <InputLabel>Name *</InputLabel>
                    <Input
                        fullWidth
                    />
                </FormControl>
                <FormControl fullWidth className="mb-sm">
                    <InputLabel>Extended Name *</InputLabel>
                    <Input
                        fullWidth
                    />
                </FormControl>
                <FormControl fullWidth className="mb-sm">
                    <InputLabel>Street *</InputLabel>
                    <Input
                        fullWidth
                    />
                </FormControl>
                <FormControl fullWidth className="mb-sm">
                    <InputLabel>Postal Code *</InputLabel>
                    <Input
                        fullWidth
                    />
                </FormControl>
                <FormControl fullWidth className="mb-sm">
                    <InputLabel>City *</InputLabel>
                    <Input
                        fullWidth
                    />
                </FormControl>
            </ModalDialog>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                open={notificationOpen}
                autoHideDuration={3000}
                onClose={handleClose}
                ContentProps={{
                    'aria-describedby': 'message-id',
                }}
                message={<span id="message-id">Contact Created Succesfuly</span>}
            />
        </div>
	);
}

export default withRouter(ContactTable);