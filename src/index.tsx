import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import "./assets/css/reset.css";
import "./index.scss";
import UseEffectOnce from "./hooks/effect/useEffectOnce/demo/demo1";
import Async from "./hooks/effect/useAsyncEffect/demo/demo1";
import Update from "./hooks/effect/useUpdateEffect/demo/demo1";
import Deep from "./hooks/effect/useDeepCompareEffect/demo/demo1";
import Debounce from "./hooks/effect/useDebounceEffect/demo/demo";
import Throttle from "./hooks/effect/useThrottleEffect/demo/demo1";
import CountUpdate from "./hooks/effect/useCountUpdateEffect/demo/demo2";
import RangeUpdate from "./hooks/effect/useRangeUpdateEffect/demo/demo2";
import First from "./hooks/lifeCycle/useFirstMountState/demo/demo1";
import SetState from "./hooks/state/useSetState/demo/demo1";
import Compare from "./hooks/effect/useCompareEffect/demo/demo1";
import URL from "./hooks/state/useUrlState/demo/demo1";
import Cookie from "./hooks/state/useCookie/demo/demo1";
import Event from "./hooks/callBack/useEvent/demo/demo1";
import Unmount from "./hooks/lifeCycle/useUnmountedRef/demo/demo1";
import Boolean from "./hooks/state/useBoolean/demo/demo1";
import Toggle from "./hooks/state/useToggle/demo/demo1";
import LocalStorage from "./hooks/state/useLocalStorageState/demo/demo1";
import SessionStorage from "./hooks/state/useSessionStorageState/demo/demo1";
import Map from "./hooks/state/useMap/demo/demo1";
import Previous from "./hooks/state/usePrevious/demo/demo1";
import GetState from "./hooks/state/useGetState/demo/demo1";
import Set from "./hooks/state/useSet/demo/demo1";
import Mount from "./hooks/lifeCycle/useMount/demo/demo1";
import Array from "./hooks/state/useArray/demo";

function App(): JSX.Element {
	return (
		<div>
			<Router>
				<div className="tab">
					<Link to="/once">once</Link>
					<Link to="/async">async</Link>
					<Link to="/update">Update</Link>
					<Link to="/Deep">Deep</Link>
					<Link to="/Debounce">Debounce</Link>
					<Link to="/Throttle">Throttle</Link>
					<Link to="/CountUpdate">CountUpdate</Link>
					<Link to="/RangeUpdate">RangeUpdate</Link>
					<Link to="/First">First</Link>
					<Link to="/SetState">SetState</Link>
					<Link to="/Compare">Compare</Link>
					<Link to="/URL">URL</Link>
					<Link to="/Cookie">Cookie</Link>
					<Link to="/Event">Event</Link>
					<Link to="/Unmount">Unmount</Link>
					<Link to="/Boolean">Boolean</Link>
					<Link to="/Toggle">Toggle</Link>
					<Link to="/LocalStorage">LocalStorage</Link>
					<Link to="/SessionStorage">SessionStorage</Link>
					<Link to="/Map">Map</Link>
					<Link to="/Previous">Previous</Link>
					<Link to="/GetState">GetState</Link>
					<Link to="/Set">Set</Link>
					<Link to="/Mount">Mount</Link>
					<Link to="/Array">Array</Link>
				</div>
				<Routes>
					<Route path="/once" element={<UseEffectOnce />} />
					<Route path="/async" element={<Async />} />
					<Route path="/update" element={<Update />} />
					<Route path="/Deep" element={<Deep />} />
					<Route path="/Debounce" element={<Debounce />} />
					<Route path="/Throttle" element={<Throttle />} />
					<Route path="/CountUpdate" element={<CountUpdate />} />
					<Route path="/RangeUpdate" element={<RangeUpdate />} />
					<Route path="/First" element={<First />} />
					<Route path="/URL" element={<URL />} />
					<Route path="/SetState" element={<SetState />} />
					<Route path="/Compare" element={<Compare />} />
					<Route path="/Cookie" element={<Cookie />} />
					<Route path="/Event" element={<Event />} />
					<Route path="/Unmount" element={<Unmount />} />
					<Route path="/Boolean" element={<Boolean />} />
					<Route path="/Toggle" element={<Toggle />} />
					<Route path="/LocalStorage" element={<LocalStorage />} />
					<Route path="/SessionStorage" element={<SessionStorage />} />
					<Route path="/Map" element={<Map />} />
					<Route path="/Previous" element={<Previous />} />
					<Route path="/GetState" element={<GetState />} />
					<Route path="/Set" element={<Set />} />
					<Route path="/Mount" element={<Mount />} />
					<Route path="/Array" element={<Array />} />
				</Routes>
			</Router>
		</div>

	);
}

console.log("应用构建环境：", process.env.NODE_ENV);
console.log("应用运行环境：", RUN_ENV); // eslint-disable-line
RUN_ENV === "dev" && module?.hot?.accept(); // eslint-disable-line
render(<App />, document.getElementById("root"));