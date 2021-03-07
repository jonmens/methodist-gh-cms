import React, { useState, useEffect } from 'react'
import { db } from '../firebase';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const AddNewMember = () => {

    const [currentDateBaptized, setCurrentDateBaptized] = useState(new Date());
    const [currentDateConfirmed, setCurrentDateConfirmed] = useState(new Date());
    const [isCheckedBaptized, setIsCheckedBaptized] = useState(false);
    const [isCheckedConfirmed, setIsCheckedConfirmed] = useState(false);
    

    function renderComponentBaptized() {
        if (isCheckedBaptized) {
            return 'Baptized';
        } else {
            return 'Not Baptized';
        }
    };

    function renderComponentConfirmed() {
        if (isCheckedConfirmed) {
            return 'Confirmed';
        } else {
            return 'Not Confirmed';
        }
    };

    const dataLeaderStatus = [
        {
            value: "Minister",
            label: "Minister"
        },
        {
            value: "Evagelist",
            label: "Evagelist"
        },
        {
            value: "Bible Class",
            label: "Bible Class"
        },
        {
            value: "Society Steward",
            label: "Society Steward"
        },
        {
            value: "Steward Finance",
            label: "Steward Finance"
        },
        {
            value: "Discipleship Class",
            label: "Discipleship Class"
        },
        {
            value: "Committee of Ministries",
            label: "Committee of Ministries"
        },
        {
            value: "Committee of Social Serv.",
            label: "Committee of Social Serv."
        },
        {
            value: "Committee of Youth & Edu.",
            label: "Committee of Youth & Edu."
        },
        {
            value: "Committee of Fin. & Dev.",
            label: "Committee of Fin. & Dev."
        },
        {
            value: "Children Service Supt.",
            label: "Children Service Supt."
        },
        {
            value: "Society Youth Organizer",
            label: "Society Youth Organizer"
        },
        {
            value: "Society Lay Chairman",
            label: "Society Lay Chairman"
        },
        {
            value: "Benevolent",
            label: "Benevolent"
        }

    ];

    // set value for default selection
    const [selectedValueLeaderStatus, setSelectedValueLeaderStatus] = useState([]);

    // handle onChange event of the dropdown
    const handleChangeLeaderStatus = (e) => {
        setSelectedValueLeaderStatus(Array.isArray(e) ? e.map(x => x.value) : []);
    }

    const dataLanguages = [
        {
            value: "English",
            label: "English"
        },
        {
            value: "Ga",
            label: "Ga"
        },
        {
            value: "Twi",
            label: "Twi"
        },
        {
            value: "Ewe",
            label: "Ewe"
        },
        {
            value: "Hausa",
            label: "Hausa"
        },
        {
            value: "French",
            label: "French"
        }
    ];

    // set value for default selection
    const [selectedValueLanguages, setSelectedValueLanguages] = useState([]);

    // handle onChange event of the dropdown
    const handleChangeLanguages = (e) => {
        setSelectedValueLanguages(Array.isArray(e) ? e.map(x => x.value) : []);
    }

    const dataEducation = [
        {
            value: "Primary",
            label: "Primary"
        },
        {
            value: "JHS",
            label: "JHS"
        },
        {
            value: "SHS",
            label: "SHS"
        },
        {
            value: "Tertiary",
            label: "Tertiary"
        },
        {
            value: "Vocational",
            label: "Vocational"
        },
        {
            value: "Advance Degree",
            label: "Advance Degree"
        }
    ];

    // set value for default selection
    const [selectedValueEducation, setSelectedValueEducation] = useState([]);

    // handle onChange event of the dropdown
    const handleChangeEducation = (e) => {
        setSelectedValueEducation(Array.isArray(e) ? e.map(x => x.value) : []);
    }


    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [nationality, setNationality] = useState("");
    const [residence, setResidence] = useState("");
    const [landmark, setLandmark] = useState("");
    const [GPSAddress, setGPSAddress] = useState("");
    const [residentialAddress, setResidentialAddress] = useState("");
    const [marritalStatus, setMarritalStatus] = useState("");
    const [membershipStatus, setMembershipStatus] = useState("");
    const [placeBaptism, setPlaceBaptism] = useState("");
    const [placeConfirmation, setPlaceConfirmation] = useState("");
    const [joinedOrganisation, setJoinedOrganisation] = useState("");
    const [organisationStatus, setOrganisationStatus] = useState("");
    const [organisationStatusPosition, setOrganisationStatusPosition] = useState("");
    const [belongToClass, setBelongToClass] = useState("");
    const [belongToClassSpecify, setBelongToClassSpecify] = useState("");
    const [belongToClassClassLeader, setBelongToClassClassLeader] = useState("");
    const [tither, setTither] = useState("");
    const [layPreacher, setLayPreacher] = useState("");
    const [layPreacherSpecify, setLayPreacherSpecify] = useState("");
    const [leaderOrBelongToCommittee, setLeaderOrBelongToCommittee] = useState("");

    const [loader, setLoader] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        setLoader(true)

        db.collection('contacts').add({
            name: name,
            mobile: mobile,
            email: email,
            gender: gender,
            nationality: nationality,
            selectedValueLanguages: JSON.stringify(selectedValueLanguages, null, 2),
            selectedValueEducation: JSON.stringify(selectedValueEducation, null, 2),
            residence: residence,
            landmark: landmark,
            GPSAddress: GPSAddress,
            residentialAddress: residentialAddress,
            marritalStatus: marritalStatus,
            membershipStatus: membershipStatus,
            isCheckedBaptized: renderComponentBaptized(),
            isCheckedConfirmed: renderComponentConfirmed(),
            currentDateBaptized: currentDateBaptized,
            currentDateConfirmed: currentDateConfirmed,
            placeBaptism: placeBaptism,
            placeConfirmation: placeConfirmation,
            joinedOrganisation: joinedOrganisation,
            organisationStatus: organisationStatus,
            organisationStatusPosition: organisationStatusPosition,
            belongToClass: belongToClass,
            belongToClassSpecify: belongToClassSpecify,
            belongToClassClassLeader: belongToClassClassLeader,
            tither: tither,
            layPreacher: layPreacher,
            layPreacherSpecify: layPreacherSpecify,
            leaderOrBelongToCommittee: leaderOrBelongToCommittee,
            selectedValueLeaderStatus: JSON.stringify(selectedValueLeaderStatus, null, 2)

        })
            .then(() => {
                alert("Data submitted successfully");
                setLoader(false);
            })
            .catch((error) => {
                alert(error.message);
                setLoader(false);
            });

        setName('');
        setMobile('');
        setEmail('');
        setGender('');
        setNationality('');
        setResidence('');
        setLandmark('');
        setGPSAddress('');
        setResidentialAddress('');
        setMarritalStatus('');
        setMembershipStatus('');
        setPlaceBaptism('');
        setPlaceConfirmation('');
        setJoinedOrganisation('');
        setOrganisationStatus('');
        setOrganisationStatusPosition('');
        setBelongToClass('');
        setBelongToClassSpecify('');
        setBelongToClassClassLeader('');
        setTither('');
        setLayPreacher('');
        setLayPreacherSpecify('');
        setLeaderOrBelongToCommittee('');

    };

    return (
        <div className="content-wrapper">
            <section className="content">
                <div className="container-fluid">

                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>Membership Form</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item active">Membership Form</li>
                            </ol>
                        </div>
                    </div>


                    <div className="row">
                        {/* Member Bio-Info */}
                        <div className="col-md-6">
                            <div className="card card-primary">
                                <div className="card-header">
                                    <h3 className="card-title">Member Bio-info</h3>
                                </div>
                                {/* /.card-header */}

                                <div className="card-body col-md-12">
                                    <form autoComplete="off" onSubmit={handleSubmit}>
                                        <div className="form-group input-group">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                    <i className="fas fa-user"></i>
                                                </div>
                                            </div>
                                            <input className="form-control" placeholder="Full Name"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                            />
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group input-group col-md-6">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text">
                                                        <i className="fas fa-mobile-alt"></i>
                                                    </div>
                                                </div>
                                                <input className="form-control" placeholder="Mobile"
                                                    value={mobile}
                                                    onChange={(e) => setMobile(e.target.value)}
                                                />
                                            </div>
                                            <div className="form-group input-group col-md-6">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text">
                                                        <i className="fas fa-envelope"></i>
                                                    </div>
                                                </div>
                                                <input className="form-control" placeholder="Email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                />
                                            </div>
                                        </div>

                                        <div className="form-row">
                                            <div className="form-group input-group col-md-auto">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text col-md-6">
                                                        <table>
                                                            <tr>
                                                                <td>
                                                                    <i className="fa fa-venus-mars">Gender</i>
                                                                </td>
                                                            </tr>
                                                        </table>

                                                    </div>

                                                    <div className="input-group-text col-md-12">
                                                        <div onChange={(e) => setGender(e.target.value)}>
                                                            <table className="col-md-6">
                                                                <tr><td>
                                                                </td><td></td><td></td><td></td><td></td><td></td><td>
                                                                    </td><td></td><td></td><td></td><td></td><td></td><td>
                                                                        <input type="radio" value="Male" name="gender" /> Male
                                                                </td><td></td><td></td><td></td><td></td><td></td><td>
                                                                    </td><td></td><td></td><td></td><td></td><td></td><td>

                                                                        <input type="radio" value="Female" name="gender" /> Female
                                                                </td></tr>
                                                            </table>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="form-row">
                                            <div className="form-group input-group col-md-12" onChange={(e) => setNationality(e.target.value)}>
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text">
                                                        <i className="fas fa-globe"> Nationality</i>
                                                    </div>
                                                    <div className="form-group input-group input-group-prepend input-group-text">
                                                        <div className="col-md-auto">
                                                            <table>
                                                                <tr>
                                                                    <td></td><td></td><td></td><td></td><td></td>
                                                                    <td>
                                                                        <input type="radio" value="Ghanaian" name="nationality" /> Ghanaian
                                                                </td>
                                                                </tr>

                                                            </table>

                                                        </div>
                                                        {/* <div class="col-md-auto">
                                                            <input type="radio" value={ghanaian} name="nationality" /> Others
                                                    </div> */}
                                                        <input className="form-control" placeholder="Other"
                                                            value={nationality}
                                                            onChange={(e) => setNationality(e.target.value)} />

                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                        <Select
                                            className="dropdown"
                                            placeholder="Languages Spoken"
                                            value={dataLanguages.filter(obj => selectedValueLanguages.includes(obj.value))} // set selected values
                                            options={dataLanguages} // set list of the data
                                            onChange={handleChangeLanguages} // assign onChange function
                                            isMulti
                                            isClearable
                                        />

                                        {/* {selectedValueLanguages && <div style={{ marginTop: 20, lineHeight: '25px' }}>
                                            <div><b>Selected Languages: </b> {JSON.stringify(selectedValueLanguages, null, 2)}</div>
                                        </div>} */}
                                        <br />

                                        <div className="form-group input-group">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                    <i className="fa fa-map-pin"></i>
                                                </div>
                                            </div>
                                            <input className="form-control" placeholder="Place of Residence"
                                                value={residence}
                                                onChange={(e) => setResidence(e.target.value)}
                                            />
                                        </div>

                                        <div className="form-group input-group">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                    <i className=" fas fa-road"></i>
                                                </div>
                                            </div>
                                            <input className="form-control" placeholder="Nearest Landmark"
                                                value={landmark}
                                                onChange={(e) => setLandmark(e.target.value)}
                                            />
                                        </div>

                                        <div className="form-group input-group">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                    <i className="fa fa-map-marker"></i>
                                                </div>
                                            </div>
                                            <input className="form-control" placeholder="GPS Address"
                                                value={GPSAddress}
                                                onChange={(e) => setGPSAddress(e.target.value)}
                                            />
                                        </div>

                                        <div className="form-group">
                                            <textarea className="form-control" placeholder="Residential Address"
                                                value={residentialAddress}
                                                onChange={(e) => setResidentialAddress(e.target.value)}
                                            />
                                        </div>

                                        <Select
                                            className="dropdown"
                                            placeholder="Educational Level"
                                            value={dataEducation.filter(obj => selectedValueEducation.includes(obj.value))} // set selected values
                                            options={dataEducation} // set list of the data
                                            onChange={handleChangeEducation} // assign onChange function
                                            isMulti
                                            isClearable
                                        />

                                        {/* {selectedValueEducation && <div style={{ marginTop: 20, lineHeight: '25px' }}>
                                            <div><b>Selected Education: </b> {JSON.stringify(selectedValueEducation, null, 2)}</div>
                                        </div>}
                                        */}


                                        <div><br /></div>
                                        <div className="form-row">
                                            <div className="form-group input-group col-md-12" onChange={(e) => setMarritalStatus(e.target.value)}>
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text">
                                                        <i className="fas fa-globe"></i>
                                                    </div>

                                                    <div className="form-group input-group input-group-prepend input-group-text">
                                                        <div className="col-md-auto">
                                                            <div className="form-row">
                                                                <table className="form-group input-group col-md-6">
                                                                    <tr>
                                                                        <td >
                                                                            <div>
                                                                                Marital Status:
                                                                            </div>
                                                                        </td>
                                                                        <td></td><td></td><td></td>
                                                                    </tr>

                                                                </table>
                                                                <table className="form-group input-group col-md-6">

                                                                    <tr>
                                                                        <td>
                                                                            <input type="radio" value="Married" name="marritalStatus" /> Married
                                                                        </td>
                                                                        <td></td><td></td><td></td><td></td><td></td><td></td>
                                                                        <td></td><td></td><td></td><td></td><td></td><td></td>
                                                                        <td></td><td></td><td></td>
                                                                        <td>
                                                                            <input type="radio" value="Single" name="marritalStatus" /> Single
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <input type="radio" value="Divorced" name="marritalStatus" /> Divorced
                                                                        </td>
                                                                        <td></td><td></td><td></td><td></td><td></td><td></td>
                                                                        <td></td><td></td><td></td><td></td><td></td><td></td>
                                                                        <td>
                                                                            <input type="radio" value="Widowed" name="marritalStatus" /> Widowed
                                                                        </td>
                                                                    </tr>
                                                                </table>


                                                            </div>

                                                            {/*Preaching Status Ends*/}
                                                        </div>

                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                    </form>
                                </div>

                            </div>
                        </div>

                        {/* Membership Status */}
                        <div className="col-md-6">
                            <div className="card card-primary">
                                <div className="card-header">
                                    <h3 className="card-title">Membership Status</h3>
                                </div>
                                {/* /.card-header */}

                                <div className="card-body col-md-12">
                                    <form autoComplete="off" onSubmit={handleSubmit}>

                                        <div className="form-row">
                                            <div className="form-group input-group col-md-12" onChange={(e) => setMembershipStatus(e.target.value)}>
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text">
                                                        <i className="fas fa-globe"></i>
                                                    </div>
                                                    <div className="form-group input-group input-group-prepend input-group-text">
                                                        <div className="col-md-12">

                                                            <div className="form-row">
                                                                <div className="form-group input-group input-group-prepend input-group-text">
                                                                    <div className="col-md-auto">
                                                                        <div className="form-row">

                                                                            <table className="form-group input-group col-md-6">
                                                                                <tr>
                                                                                    <td>
                                                                                        <input type="radio" value="Full Member" name="membershipStatus" /> Full Member
                                                                                    </td>
                                                                                    <td></td><td></td><td></td><td></td><td></td><td></td>
                                                                                    <td></td><td></td><td></td><td></td><td></td><td></td>
                                                                                    <td>
                                                                                        <input type="radio" value="Adherent" name="membershipStatus" /> Adherent
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>
                                                                                        <input type="radio" value="Catechumen" name="membershipStatus" /> Catechumen
                                                                                    </td>
                                                                                    <td></td><td></td><td></td><td></td><td></td><td></td>
                                                                                    <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                                                                                    <td>
                                                                                        <input type="radio" value="Widowed" name="membershipStatus" /> Junior
                                                                                    </td>
                                                                                </tr>
                                                                            </table>

                                                                        </div>

                                                                        {/*Preaching Status Ends*/}
                                                                    </div>

                                                                </div>


                                                            </div>
                                                            <hr />
                                                            <div className="form-row">
                                                                {/* <h6>current Date :{}</h6> */}
                                                                <DatePicker
                                                                    dateFormat="dd MMMM, yyyy"
                                                                    className="inputStyles"
                                                                    selected={currentDateBaptized} onChange={date => setCurrentDateBaptized(date)}

                                                                /> 
                                                            
                                                                <table className="form-row form-group input-group col-md-6">
                                                                    <tr>
                                                                        <td>
                                                                            Baptized <input
                                                                                type="checkbox"
                                                                                checked={isCheckedBaptized}
                                                                                onChange={(e) => setIsCheckedBaptized(e.target.checked)}

                                                                            />
                                                                        </td>
                                                                        
                                                                    
                                                                    </tr>
                                                                    {console.log(currentDateBaptized)}
                                                                </table>

                                                                <div className="form-row form-group input-group col-md-12">
                                                                    <div className="input-group-prepend">
                                                                        <div className="input-group-text">
                                                                            <i className="fa fa-map-marker"> Place.</i>
                                                                        </div>
                                                                    </div>
                                                                    <input className="form-control" placeholder=""
                                                                        value={placeBaptism}
                                                                        onChange={(e) => setPlaceBaptism(e.target.value)}
                                                                    />
                                                                </div>

                                                            </div>

                                                            <hr />
                                                            <div className="form-row">
                                                                {/* <h6>current Date :{}</h6> */}
                                                                <DatePicker
                                                                    dateFormat="dd MMMM, yyyy"
                                                                    className="inputStyles"
                                                                    selected={currentDateConfirmed} onChange={date => setCurrentDateConfirmed(date)}

                                                                /> 
                                                                <table className="form-row form-group input-group col-md-6">
                                                                    <tr>
                                                                        <td>
                                                                            Confirmed <input
                                                                                type="checkbox"
                                                                                checked={isCheckedConfirmed}
                                                                                onChange={(e) => setIsCheckedConfirmed(e.target.checked)}

                                                                            />
                                                                        </td>
                                                                        </tr>
                                                                </table>

                                                                <div className="form-row form-group input-group col-md-12">
                                                                    <div className="input-group-prepend">
                                                                        <div className="input-group-text">
                                                                            <i className="fa fa-map-marker"> Place.</i>
                                                                        </div>
                                                                    </div>
                                                                    <input className="form-control" placeholder=""
                                                                        value={placeConfirmation}
                                                                        onChange={(e) => setPlaceConfirmation(e.target.value)}
                                                                    />
                                                                </div>

                                                            </div>

                                                            {/*Membership Status Ends*/}
                                                        </div>

                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                    </form>
                                </div>

                                {/* /.card-body */}
                            </div>

                            {/* Organisation Status */}

                            <div className="card card-primary">
                                <div className="card-header">
                                    <h3 className="card-title">Organizational status</h3>
                                </div>
                                {/* /.card-header */}

                                <div className="card-body col-md-12">
                                    <form autoComplete="off" onSubmit={handleSubmit}>

                                        <div className="form-row">
                                            <div className="form-group input-group col-md-12" onChange={(e) => setJoinedOrganisation(e.target.value)}>
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text">
                                                        <i className="fas fa-globe"></i>
                                                    </div>
                                                    <div className="form-group input-group input-group-prepend input-group-text">
                                                        <div className="col-md-auto">

                                                            <div className="form-row" onChange={(e) => setJoinedOrganisation(e.target.value)}>
                                                                <table className="form-group input-group col-md-6">
                                                                    <tr>
                                                                        <td>
                                                                            <div>
                                                                                Have you joined any
                                                                        </div>
                                                                        </td>

                                                                        <td></td><td></td><td></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <div>
                                                                                Organization?
                                                                        </div>
                                                                        </td>
                                                                    </tr>
                                                                </table>

                                                                <table className="form-group input-group col-md-6">
                                                                    <tr>
                                                                        <td>
                                                                            <input
                                                                                type="radio" value="Yes" name="joinedOrganisation" /> Yes
                                                                        </td>

                                                                        <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <input
                                                                                type="radio" value="No" name="joinedOrganisation" /> No
                                                                        </td>
                                                                    </tr>

                                                                </table>
                                                            </div>

                                                            <hr />
                                                            <div className="form-row" onChange={(e) => setOrganisationStatus(e.target.value)}>
                                                                <table className="form-group input-group col-md-6">
                                                                    <tr>
                                                                        <td >
                                                                            If yes what’s your status?
                                                                        </td>
                                                                        <td></td><td></td><td></td>
                                                                    </tr>
                                                                </table>

                                                                <table className="form-group input-group col-md-6">
                                                                    <tr>
                                                                        <td>
                                                                            <input type="radio" value="Member" name="organisationStatus" /> Member
                                                                        </td>

                                                                        <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <input type="radio" value="Officer" name="organisationStatus" /> Officer
                                                                        </td>
                                                                    </tr>

                                                                </table>

                                                                <div className="form-group input-group">
                                                                    <div className="input-group-prepend">
                                                                        <div className="input-group-text">
                                                                            <i className="fas fa-user"></i>
                                                                        </div>
                                                                    </div>
                                                                    <input className="form-control" placeholder="Position"
                                                                        value={organisationStatusPosition}
                                                                        onChange={(e) => setOrganisationStatusPosition(e.target.value)}
                                                                    />
                                                                </div>

                                                            </div>

                                                            {/*Organisation Status Ends*/}
                                                        </div>

                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                    </form>
                                </div>



                                {/* /.card-body */}
                            </div>
                            {/* /.card */}
                            {/* Input addon */}
                            {/* /.card */}
                            {/* Input addon */}
                        </div>

                        {/* Class Status */}
                        <div className="col-md-6">
                            <div className="card card-primary">
                                <div className="card-header">
                                    <h3 className="card-title">Class Status</h3>
                                </div>
                                {/* /.card-header */}

                                <div className="card-body col-md-12">
                                    <form autoComplete="off" onSubmit={handleSubmit}>

                                        <div className="form-row">
                                            <div className="form-group input-group col-md-12">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text">
                                                        <i className="fas fa-globe"></i>
                                                    </div>
                                                    <div className="form-group input-group input-group-prepend input-group-text">
                                                        <div className="col-md-auto">

                                                            <div className="form-row" onChange={(e) => setBelongToClass(e.target.value)}>
                                                                <table className="form-group input-group col-md-6">
                                                                    <tr>
                                                                        <td>
                                                                            Do you belong to a class?
                                                                        </td>

                                                                        <td></td><td></td><td></td>
                                                                    </tr>
                                                                </table>

                                                                <table className="form-group input-group col-md-6">
                                                                    <tr>
                                                                        <td>
                                                                            <input type="radio" value="Yes" name="belongToClass" /> Yes
                                                                        </td>

                                                                        <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <input type="radio" value="No" name="belongToClass" /> No
                                                                        </td>
                                                                    </tr>

                                                                </table>
                                                            </div>

                                                            <hr />
                                                            <div className="form-row" onChange={(e) => setBelongToClassSpecify(e.target.value)}>
                                                                <table className="form-group input-group col-md-6">
                                                                    <tr>
                                                                        <td >
                                                                            If Yes specify:
                                                                        </td>
                                                                        <td></td><td></td><td></td>
                                                                    </tr>
                                                                </table>

                                                                <table className="form-group input-group col-md-6">
                                                                    <tr>
                                                                        <td>
                                                                            <input type="radio" value="Bible Class" name="belongToClassSpecify" /> Bible Class
                                                                        </td>

                                                                        <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <input type="radio" value="Discipleship Class" name="belongToClassSpecify" /> Discipleship Class
                                                                        </td>
                                                                    </tr>

                                                                </table>

                                                                <div className="form-group input-group">
                                                                    <div className="input-group-prepend">
                                                                        <div className="input-group-text">
                                                                            <i className="fas fa-user"></i>
                                                                        </div>
                                                                    </div>
                                                                    <input className="form-control" placeholder="Name of Class Leader"
                                                                        value={belongToClassClassLeader}
                                                                        onChange={(e) => setBelongToClassClassLeader(e.target.value)}
                                                                    />
                                                                </div>

                                                            </div>

                                                            <div className="form-row" onChange={(e) => setTither(e.target.value)}>
                                                                <table className="form-group input-group col-md-6">
                                                                    <tr>
                                                                        <td>
                                                                            Are you a tither?
                                                                        </td>

                                                                        <td></td><td></td><td></td>
                                                                    </tr>
                                                                </table>

                                                                <table className="form-group input-group col-md-6">
                                                                    <tr>
                                                                        <td>
                                                                            <input type="radio" value="Yes" name="tither" /> Yes
                                                                        </td>

                                                                        <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <input type="radio" value="No" name="tither" /> No
                                                                        </td>
                                                                    </tr>

                                                                </table>
                                                            </div>



                                                            {/*Class Status Ends*/}
                                                        </div>

                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                    </form>
                                </div>



                                {/* /.card-body */}
                            </div>
                            {/* /.card */}
                            {/* Input addon */}
                        </div>

                        {/* Preaching Status */}
                        <div className="col-md-6">
                            <div className="card card-primary">
                                <div className="card-header">
                                    <h3 className="card-title">Preaching status</h3>
                                </div>
                                {/* /.card-header */}

                                <div className="card-body col-md-12">
                                    <form autoComplete="off" onSubmit={handleSubmit}>

                                        <div className="form-row">
                                            <div className="form-group input-group col-md-12">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text">
                                                        <i className="fas fa-globe"></i>
                                                    </div>
                                                    <div className="form-group input-group input-group-prepend input-group-text">
                                                        <div className="col-md-auto">
                                                            <div><hr /></div>
                                                            <div className="form-row" onChange={(e) => setLayPreacher(e.target.value)}>
                                                                <table className="form-group input-group col-md-6">
                                                                    <tr>
                                                                        <td>
                                                                            <div>
                                                                                Are you a lay Preacher?
                                                                        </div>
                                                                        </td>

                                                                        <td></td><td></td><td></td>
                                                                    </tr>
                                                                </table>

                                                                <table className="form-group input-group col-md-6">
                                                                    <tr>
                                                                        <td>
                                                                            <input type="radio" value="Yes" name="layPreacher" /> Yes
                                                                        </td>

                                                                        <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <input type="radio" value="No" name="layPreacher" /> No
                                                                        </td>
                                                                    </tr>

                                                                </table>
                                                            </div>

                                                            <hr />
                                                            <div className="form-row" onChange={(e) => setLayPreacherSpecify(e.target.value)}>
                                                                <table className="form-group input-group col-md-6">
                                                                    <tr>
                                                                        <td >
                                                                            If yes kindly specify:
                                                                        </td>
                                                                        <td></td><td></td><td></td>
                                                                    </tr>
                                                                </table>

                                                                <table className="form-group input-group col-md-6">
                                                                    <tr>
                                                                        <td>
                                                                            <input type="radio" value="Full Lay Preacher" name="layPreacherSpecify" /> Full Lay Preacher
                                                                        </td>

                                                                        <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <input type="radio" value="Lay Preacher on Trial" name="layPreacherSpecify" /> Lay Preacher on Trial
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <input type="radio" value="Note to Preach" name="layPreacherSpecify" /> Note to Preach
                                                                        </td>

                                                                        <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                                                                    </tr>

                                                                </table>



                                                            </div>
                                                            <hr />


                                                            {/*Preaching Status Ends*/}
                                                        </div>

                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                    </form>
                                </div>



                                {/* /.card-body */}
                            </div>
                            {/* /.card */}
                            {/* Input addon */}
                        </div>

                        {/* Leadership Status */}
                        <div className="col-md-6">
                            <div className="card card-primary">
                                <div className="card-header">
                                    <h3 className="card-title">Leadership status</h3>
                                </div>
                                {/* /.card-header */}

                                <div className="card-body col-md-12">
                                    <form autoComplete="off" onSubmit={handleSubmit}>

                                        <div className="form-row">
                                            <div className="form-group input-group col-md-12">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text">
                                                        <i className="fas fa-globe"></i>
                                                    </div>
                                                    <div className="form-group input-group input-group-prepend input-group-text">
                                                        <div className="col-md-auto">

                                                            <div className="form-row" onChange={(e) => setLeaderOrBelongToCommittee(e.target.value)}>
                                                                <table className="form-group input-group col-md-6">
                                                                    <tr>
                                                                        <td>
                                                                            <div>
                                                                                Are you a leader or
                                                                        </div>
                                                                        </td>

                                                                        <td></td><td></td><td></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <div>
                                                                                belong to any Committee?
                                                                        </div>
                                                                        </td>
                                                                    </tr>
                                                                </table>

                                                                <table className="form-group input-group col-md-6">
                                                                    <tr>
                                                                        <td>
                                                                            <input type="radio" value="Yes" name="leaderOrBelongToCommittee" /> Yes
                                                                        </td>

                                                                        <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <input type="radio" value="No" name="leaderOrBelongToCommittee" /> No
                                                                        </td>
                                                                    </tr>

                                                                </table>
                                                            </div>

                                                            <hr />

                                                            <Select
                                                                className="dropdown"
                                                                placeholder="Select All That's Applicable"
                                                                value={dataLeaderStatus.filter(obj => selectedValueLeaderStatus.includes(obj.value))} // set selected values
                                                                options={dataLeaderStatus} // set list of the data
                                                                onChange={handleChangeLeaderStatus} // assign onChange function
                                                                isMulti
                                                                isClearable
                                                            />
                                                            <hr />


                                                            {/*Leadership Status Ends*/}
                                                        </div>

                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input type="submit" value="Save" className="btn btn-primary btn-block" style={{ background: loader ? "#ccc" : " rgb(2,2,110)" }} />
                                        </div>

                                    </form>
                                </div>



                                {/* /.card-body */}
                            </div>
                            {/* /.card */}
                            {/* Input addon */}
                        </div>



                    </div>

                </div>

            </section>

        </div>
    )
}

export default AddNewMember;
