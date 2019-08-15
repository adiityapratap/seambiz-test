import React, { useEffect, useState } from "react";
import { Button, Avatar, Container, Table, TableCell, TableHead, TableRow, TableBody, FormControl, InputLabel, Input } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { useAsync } from "react-async";
import { loadContacts } from "../api/contact";
import ModalDialog from '../components/ModalDialog';

//import LoadingIndicator from "app/components/loadingindicator";
//import { selectCustomer } from "app/store/reducers/context.redux";
//import { rtFilterData, RTSelectAllCheckbox, RTCheckbox } from "app/components/react-table-tools";

function ContactTable({ history, searchTerm }) {
	const dispatch = useDispatch();
	const contact = useSelector(({ contact }) => contact);
    
	const { data, error, isLoading } = useAsync(loadContacts, { companyId: 1, customerId: 1 });
    
	const [filteredData, setFilteredData] = useState([]);
	const searchColumns = ["name", "extended_name", "ext_system_id", "street", "city"];

	/* useEffect(() => {
		rtFilterData(filteredData, setFilteredData, data, searchTerm, searchColumns);
	}, [data, searchTerm, searchColumns]); */

	if (isLoading) return <div>Loading...</div>;
    if (error) return "Error:" + error;
    
    let createContactModal = React.createRef();

    function openCreateContactModal() {
        console.log(createContactModal, "createContact")
        createContactModal.current.handleClickOpen();
    }

    function createContact() {
        alert("Created Contact")
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
        </div>
        /* <ReactTable
			className="-striped -highlight h-full w-full sm:rounded-16 overflow-hidden"
			getTrProps={(state, rowInfo, column) => {
				return {
					className: "cursor-pointer",
					onClick: (e, handleOriginal) => {
						if (rowInfo) {
							dispatch(selectCustomer(rowInfo.original));
							history.push("/c/" + companyID + "/customer/" + rowInfo.original.id + "/");
						}
					},
				};
			}}
			data={filteredData}
			columns={[
				{
					accessor: "id",
					Cell: row => (
						<Avatar className="mr-8" alt={row.original.name} src={row.original.images[0].path} />
					),
					className: "justify-center",
					width: 64,
					sortable: false,
				},
				{
					Header: "Nr",
					accessor: "ext_system_id",
					width: 100,
				},
				{
					Header: "Name",
					accessor: "name",
					className: "font-bold",
				},
				{
					Header: "",
					accessor: "extended_name",
				},
				{
					Header: "Street",
					accessor: "street",
				},
				{
					Header: "City",
					accessor: "city",
				},
			]}
			defaultPageSize={10}
			noDataText="No Customers found"
		/> */
	);
}

export default withRouter(ContactTable);