import { FC, useState } from "react";
import { DatasetType } from "../../../types";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

export const DataTable: FC<DatasetType> = (props) => {
    const [axes, setAxes] = useState({
        x: [],
        y: [],
    });

    const columns = () => {
        const headers: GridColDef[] = [
            { field: "id", headerName: "ID", width: 70 },
        ];
        props.columns?.forEach((header) => {
            headers.push({
                field: header,
                headerName: header.toUpperCase(),
            });
        });

        return headers;
    };

    const rows = () => {
        const rows = [];
        for (let index = 0; index < props.rows.length; index++) {
            rows.push({
                id: index,
                ...props.rows[index],
            });
        }

        return rows;
    };

    return (
        <div>
            {props && (
                <div style={{ height: 400, width: "100%" }}>
                    <DataGrid
                        rows={rows()}
                        columns={columns()}
                        initialState={{
                            pagination: {
                                paginationModel: { page: 0, pageSize: 5 },
                            },
                        }}
                        pageSizeOptions={[5, 10]}
                        checkboxSelection
                    />
                </div>
            )}
        </div>
    );
};
