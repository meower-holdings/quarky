import {AppContext} from "../../contexts/AppContext.js";
import {useContext} from "react";
import OSSLibrary from "./OSSLibrary.jsx";

/**
 * Renders a list of open source libraries used by Quarky.
 * @returns {Array[JSX.Element]}
 * @constructor
 */
export default function OSSList() {
    const appContext = useContext(AppContext);
    const licenses = appContext.nyafile.getCachedJson("data/licenses")
    const processedLicenses = []

    console.log(licenses)
    Object.entries(licenses).forEach(function([name, data]) {
        processedLicenses.push({name: name, license: data.licenses, description: data.description, copyright: data.copyright})
    })

    return processedLicenses.map((library) => <OSSLibrary key={library.name} {...library}></OSSLibrary> )
}