import { TableCell, TableContainer, TableHead, TableRow, Table, TableBody } from '@mui/material';
import { Link } from 'react-router-dom';
import { CloudDownload } from 'lucide-react';
export default function Main() {
  return (
    <main>
      <section className="searAdd">
        <input type="text" name="search" placeholder="Search" />
        <Link to='/addpatient'className='link' > + Add Patient</Link>
      </section>
      <section>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow >
                <TableCell >
                  Patient ID
                </TableCell>
                <TableCell >
                  Name
                </TableCell>
                <TableCell>
                  Gender
                </TableCell>
                <TableCell>
                  Age
                </TableCell>
                <TableCell>
                  Contact Number
                </TableCell>
                <TableCell>
                  Eamil Address
                </TableCell>
                <TableCell>
                  Address
                </TableCell>
                <TableCell>
                  Generate Bill
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  IN/10/2024/0001
                </TableCell>
                <TableCell>
                  Surender
                </TableCell>
                <TableCell>
                  Male
                </TableCell>
                <TableCell>
                  25
                </TableCell>
                <TableCell>
                  8683077180
                </TableCell>
                <TableCell>
                  surenderghordla@gmail.com
                </TableCell>
                <TableCell>
                  vpo-behbalpur(hisar),125001
                </TableCell>
                <TableCell style={{ color: "#a33333" }}>
                  <CloudDownload />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </section>
    </main>
  )
}
