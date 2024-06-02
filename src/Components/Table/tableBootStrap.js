import Table from 'react-bootstrap/Table';

function TableComponent() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
            <th colSpan={4}>Royal Challengers Bengaluru</th>
        </tr>
      </thead>
      <tbody>
      <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Role</th>
            </tr>
            <tr>
                <td>1</td>
                <td>Virat Kohli (The Leader)</td>
                <td>Batsman</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Fafdu Plessis (captain)</td>
                <td>Batsman</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Will Jacks</td>
                <td>Allrounder</td>
            </tr>
            <tr>
                <td>4</td>
                <td>Rajat Patidar</td>
                <td>Batsman</td>
            </tr>
            <tr>
                <td>5</td>
                <td>Cameron Green</td>
                <td>Allrounder</td>
            </tr>
            <tr>
                <td>6</td>
                <td>Mahipol Lomror</td>
                <td>Allrounder</td>
            </tr>
            <tr>
                <td>7</td>
                <td>Dinesh Karthik</td>
                <td>WK-Batsman</td>
            </tr>
            <tr>
                <td>8</td>
                <td>Swapnil Singh</td>
                <td>Allrounder</td>
            </tr>
            <tr>
                <td>9</td>
                <td>Karn Sharma</td>
                <td>Bowler</td>
            </tr>
            <tr>
                <td>10</td>
                <td>Mohammed Siraj</td>
                <td>Bowler</td>
            </tr>
            <tr>
                <td>11</td>
                <td>Lockie Ferguson</td>
                <td>Bowler</td>
            </tr>
      </tbody>
    </Table>
  );
}

export default TableComponent;