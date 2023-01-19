import styled from "styled-components"
import useCalendar from "../CalendarContext";

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    td {
        padding: 4px;
        border: 2px solid #eeeeee;
        border-top: none;
        border-left: none;
        width: calc(100%/8);
        height: 75.2px;
        background: #fff;
    }
    th {
        position: relative;
    }
    th span {
        position: absolute;
        right: 18px;
        top: -16px;
        font-size: 18pt;
        font-weight: 600;
        color: #cacaca;
        vertical-align: bottom; 
    }
      
    tr:last-child td{
        border-bottom: none;
    }
      
    tr td:last-child {
        border-right: none;
    }
      
    td .active {
        width: 100%;
        height: 100%;
        background-color: #ecedff;
    }

    @media (max-width: 700px) {
        th span {
          font-size: 14pt;
          right: 8px;
          top: -12px;
        }
      }
      
    @media (max-width: 700px) {
        th span {
            font-size: 14pt;
            right: 8px;
            top: -12px;
        }
    }
    
    @media (max-width: 500px) {
        th span {
            font-size: 10pt;
            right: 5px;
            top: -9px;
        }
    }
`

const Schedule = () => {
    const { interviews } = useCalendar();
    let hours = Array.from(Array(23).keys()).map((el) => {
        return (el + 1 >= 10) ? `${el + 1}:00` : `0${el+1}:00`
      });

    return(
        <Table>
            <tbody>
                <tr>
                    <th></th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                {hours.map((el) => {
                    return(
                    <tr>
                    <th><span>{el}</span></th>
                    <td></td>
                    <td></td>
                    <td><div className="active"></div></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                    )
                })}
            </tbody>
      </Table>
    )
}

export default Schedule;