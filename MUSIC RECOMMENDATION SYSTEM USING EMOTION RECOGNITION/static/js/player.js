window.onSpotifyWebPlaybackSDKReady = () => {
const token = 'BQBOeDXwRsd0ipom4IT2RFbudNwnB3DNozQC_3t5WCeDwVbFUkyMmVYZomDRe-aGpADVXW3VQJpWuRj8KhSUH6TVYFOSZy-jP1ZfNKbxsSt-QiSQ5_SN_YpNnmzvmXAKf733zf0NlW-FNnI2MOdJ_J8sllwMuyDJeuqyzsCCumsINCV5Erv2m_ReUWqpSJTh_XunzTPJZvKhXR9jNElJ5edk2dMxjh3cF_kADQkG6D08BpruOZof_idSulSM2eyJlnTaKRca8IyG-WFOaWXPwCS2wHwh_fWLOJPMHyqNVT5RvaPHvYu-cORM3STRkql_62ZTdjETvINrq3ltgw4Xz58bDNaET9VP4z7jsS8F9cpHDF4';
    const player = new Spotify.Player({
      name: 'Web Playback SDK Quick Start Player',
      getOAuthToken: cb => { cb(token); },
      volume:1
    });

    // Error handling
    player.addListener('initialization_error', ({ message }) => { console.error(message); });
    player.addListener('authentication_error', ({ message }) => { console.error(message); });
    player.addListener('account_error', ({ message }) => { console.error(message); });
    player.addListener('playback_error', ({ message }) => { console.error(message); });

    // Playback status updates
    player.addListener('player_state_changed', state => { console.log(state); });

    // Ready
    player.addListener('ready', ({ device_id }) => {
      console.log('Ready with Device ID', device_id);
    });

    // Not Ready
    player.addListener('not_ready', ({ device_id }) => {
      console.log('Device ID has gone offline', device_id);
    });

    // Connect to the player!
    player.connect();
  };