import React from 'react';
import { Alert, Box, Grid, Typography } from "@smooth-ui/core-sc";
import { FormGroup, FormGroupIcon } from "../../components";
import { LocationOn} from "styled-icons/material";
import Input from "../../components/Input";
import Select from "../../components/Select";

const FormGroupIconStory = () => ( <Box p={10}>
        <Grid fluid gutter={5}>
            <Typography variant="h1">Form Group Icon</Typography>
            <Typography variant="h3" mt={20}>How to Use</Typography>
            <Alert variant="info">(FormGroup, FormGroupIcon) support <a href="https://smooth-ui.smooth-code.com/docs-components-box#api">API component <b>Box</b> smooth-ui</a><br/></Alert>
            <code>
<pre>{`import { FormGroup, FormGroupIcon } from `}<Box color="red" display="inline-block">'../components/Form';</Box>{`
import Input from `}<Box color="red" display="inline-block">'../components/Input';</Box>{`
import { LocationOn } from `}<Box color="red" display="inline-block">'styled-icons/material';</Box>{`
`}</pre>
            </code>
        </Grid>
        <Typography variant="h3" mb={20} mt={30}>Input Icon</Typography>
        <Alert variant="info">Support <a href="https://smooth-ui.smooth-code.com/docs-components-input#api">API component <b>Input</b> smooth-ui</a><br/></Alert>
        <FormGroup mb={10}>
            <FormGroupIcon><LocationOn /></FormGroupIcon>
            <Input icon="true" placeholder="placeholder" />
        </FormGroup>
        <code>
<pre>{`<FormGroup>
    <FormGroupIcon><LocationOn /></FormGroupIcon>
    <Input `}<b>icon="true"</b>{` placeholder="placeholder" />
</FormGroup>
`}</pre>
        </code>
        <Typography variant="h3" mb={20} mt={30}>Select Icon</Typography>
        <Alert variant="info">Support <a href="https://smooth-ui.smooth-code.com/docs-components-select#api">API component <b>Select</b> smooth-ui</a><br/></Alert>
        <FormGroup mb={10}>
            <FormGroupIcon><LocationOn /></FormGroupIcon>
            <Select icon="true">
                <option>Все категории</option>
                <option>Control</option>
                <option>Other</option>
            </Select>
        </FormGroup>
        <code>
<pre>{`import Select from `}<Box color="red" display="inline-block">'../components/Select';</Box><br/>{`
<FormGroup>
    <FormGroupIcon><LocationOn /></FormGroupIcon>
    <Select `}<b>icon="true"</b>{`>
        <option>Control</option>
        <option>Other</option>
    </Select>
</FormGroup>
`}</pre>
        </code>
    </Box>
);

export default FormGroupIconStory;
