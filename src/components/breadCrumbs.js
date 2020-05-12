import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

export default function BreadCumbs(props) {
  let bc = [...props.breadcrumbs];
  let tail = bc.pop();
  console.log(props)
  return (
    <Breadcrumbs aria-label="breadcrumb">
      {bc.map((x, i) =>
        <Link key={i} color="inherit" onClick={e => {
            fetch(`/lp/${ i ==  0 ? "top-layer" : "id/" +  x.id}`, { mode: 'cors' }).then((response) => {
              if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +
                  response.status);
                return;
              }
              response.json().then((data) => {
                let container = i > 0 ? { ...data.data.container } : { name: "Home" };
                props.updateBreadCrumbs({ bc: i, container: { ...container, children: data.data.children } })
              })
            }
            ).catch(function (err) {
              console.log('Fetch Error :-S', err);
            });
        }}>
          {x.name}
        </Link>
      )}
      <Typography color="textPrimary">{tail.name}</Typography>
    </Breadcrumbs>
  );
}