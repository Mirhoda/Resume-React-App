import React from 'react';
    export default function registration() {
        
              return (
                <div>
                  <div className="container">
                    <table align="center" cellPadding={10}>
                      <tbody><tr>
                          <td>FIRST NAME <span className="required">*</span></td>
                          <td><input type="text" id="firstname" name="First_Name" maxLength={30} />
                          </td>
                        </tr>
                        <tr>
                          <td>LAST NAME <span className="required">*</span></td>
                          <td><input type="text" id="lastname" name="Last_Name" maxLength={30} />
                          </td>
                        </tr>
                        <tr>
                          <td>DATE OF BIRTH <span className="required">*</span></td>
                          <td>
                            <input type="date" id="dateofbirth" name="birthday" />
                          </td>
                        </tr>
                        <tr>
                          <td>DEPARTMENT <span className="required">*</span></td>
                          <td>
                            <select name="Department" id="department">
                              <option value=" ">Select</option>
                              <option value="Electrical & Electronics">Electrical &amp; Electronics</option>
                              <option value="Electronics & Telecommunication">Electronics &amp; Telecommunication</option>
                              <option value="Civil">Civil</option>
                              <option value="Mechanicle">Mechanicle</option>
                              <option value="Computer Science & IT">Computer Science &amp; IT</option>
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <td>EMAIL ID <span className="required">*</span></td>
                          <td><input type="email" id="emailid" name="Email_Id" maxLength={100} /></td>
                        </tr>
                        <tr>
                          <td>MOBILE NUMBER <span className="required">*</span></td>
                          <td>
                            <input type="text" id="mobilenumber" name="Mobile_Number" maxLength={10} />
                          </td>
                        </tr>
                        <tr>
                          <td>GENDER <span className="required">*</span></td>
                          <td>
                            Male <input type="radio" id="gender" name="Gender" defaultValue="Male" />
                            Female <input type="radio" id="gender" name="Gender" defaultValue="Female" />
                          </td>
                        </tr>
                        <tr>
                          <td>ADDRESS <br /><br /><br /></td>
                          <td><textarea id="address" name="Address" maxLength={100} defaultValue={""} /></td>
                        </tr>
                        <tr>
                          <td colSpan={2} align="center">
                            <input className="button" type="button" id="entry" defaultValue="Submit" onsubmit="ageCalculator()" />
                          </td>
                        </tr>
                      </tbody></table>
                  </div>
                  <div id="middle-container">
                    <table id="display" cellPadding={15} cellSpacing={2} align="center">
                      <tbody><tr>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Date of Birth</th>
                          <th>Department</th>
                          <th>Email Id</th>
                          <th>Mobile Number</th>
                          <th>Gender</th>
                          <th>Address</th>
                        </tr>
                      </tbody></table>
                  </div>
                  {/* Footer */}
                  <div className="bottom-container" align="center">
                    <p className="copyright">Made with 💗</p>
                    <p className="copyright">© 2021 Mobinul Hoda</p>
                  </div>
                </div>
              );
            }
    