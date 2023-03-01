import React from 'react';

function Notes() {
  return (
    <div>
      Notes
      <table>
        <body>
          <tr>
            <th>09:00</th>
            <td colspan="4" class="imp-task">
              Lorem <span> (details) </span>
            </td>
          </tr>
          <tr>
            <th>10:00</th>
            <td colspan="4" class="normal-task">
              Lorem ipsum dolor sit amet <span>(details)</span>
            </td>
          </tr>
          <tr>
            <th>11:00</th>
            <td colspan="4" class="normal-task">
              Lorem ipsum <span> (details)</span>
            </td>
          </tr>
          <tr>
            <th>12:00</th>
            <td colspan="4" class="imp-task">
              Lorem ipsum <span>(details)</span>
            </td>
          </tr>
          <tr>
            <th>13:00</th>
            <td colspan="4" class="normal-task">
              lorem ipsum <span>(details)</span>
            </td>
            <td colspan="4" class="normal-task">
              Lorem ipsum <span>(details)</span>
            </td>
            <td rowspan="5" class="imp-task">
              Lorem ipsum dolor sit amet <span>(details)</span>
            </td>
            <td rowspan="2" class="normal-task">
              Lunch
            </td>
          </tr>
        </body>
      </table>
    </div>
  );
}

export default Notes;
