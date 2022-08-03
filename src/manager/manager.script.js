function ScriptLoaderManager() {
    throw new Error('This is a static class');
}

ScriptLoaderManager._scripts = [];
ScriptLoaderManager._errorUrls = [];
ScriptLoaderManager._parameters = {};

ScriptLoaderManager.setup = function (plugins, number, call) {
    if (typeof call !== "function") throw new TypeError(`Call is not a function, got ${typeof call}`);
    if (number == plugins.length) call();
    const plugin = plugins[number];
    ScriptLoaderManager._scripts.push(plugin.name);
    ScriptLoaderManager.setParameters(plugin.name, plugin.parameters);
    ScriptLoaderManager.loadScript(plugin.name + ".js", plugin.path, ScriptLoaderManager.setup(plugins, number + 1, call));
};

ScriptLoaderManager.parameters = function (name) {
    return this._parameters[name.toLowerCase()] || {};
};

ScriptLoaderManager.setParameters = function (name, parameters = {}) {
    this._parameters[name.toLowerCase()] = parameters;
};

ScriptLoaderManager.loadScript = function (name, path, call) {
    var url = path + name;
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.async = false;
    script.onerror = function () {
        ScriptLoaderManager._errorUrls.push(url);
        WindowManager.fatal(`${url} failed`);
    };
    script._url = url;
    document.body.appendChild(script);
    script.onload = call();
};

function DataLoaderManager() {
    throw new Error("This is a static class.");
}

DataLoaderManager._scripts = [];
DataLoaderManager._errorUrls = [];
DataLoaderManager._dataLoaded = {};

/**
 * @param {Array<Object>} plugins 
 */
DataLoaderManager.setup = function (plugins) {
    plugins.forEach(async function (plugin) {
        if (plugin.status && this._scripts.indexOf(plugin.name) === -1) {
            await this.loadScript(plugin.name + '.json', plugin.path, plugin);
            this._scripts.push(plugin.name);
        }
    }, this);

    if (typeof call !== "function") throw new TypeError(`Call is not a function, got ${typeof call}`);
    if (number == plugins.length) call();
    const plugin = plugins[number];
    DataLoaderManager._scripts.push(plugin.name);
    DataLoaderManager.setParameters(plugin.name, plugin.parameters);
    DataLoaderManager.loadScript(plugin.name + ".json", plugin.path, DataLoaderManager.setup(plugins, number + 1, call));
};

DataLoaderManager.checkErrors = function () {
    var url = this._errorUrls.shift();
    if (url) {
        throw new Error('Failed to load: ' + url);
    }
};

DataLoaderManager.loadScript = async function (name, path, obj, call) {
    var url = path + name;
    let httpRequest = new XMLHttpRequest(); // asynchronous request
    httpRequest.open("GET", `${url}`);
    httpRequest.overrideMimeType('application/json');
    httpRequest.send();
    httpRequest.addEventListener("readystatechange", async function () {
        if (this.readyState === this.DONE) {
            // when the request has completed
            let object = JSON.parse(this.response);
            //if object is present, create a path or go to the path and add teh data at the end of the path
            if (object) {
                //get each path steps
                var objPath = obj.objPath.split(".");
                var currentPath = DataLoaderManager._dataLoaded;
                //check if there is a path, or paste it in global
                if (objPath[0] !== "") {
                    //going through the path
                    objPath.forEach(path => {
                        if (!currentPath[path]) {
                            currentPath[path] = {};
                        }
                        currentPath = currentPath[path];
                    });
                }
                //adding data
                currentPath[obj.name] = object;
                call();
            }
        }
    });

    httpRequest.onerror = function (err) {
        DataLoaderManager._errorUrls.push(url);
        console.warn(`${url} failed.\n${err}`);
        call();
    };
};
